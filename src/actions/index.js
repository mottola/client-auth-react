import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  FETCH_MESSAGE
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  // use redux-thunk to return an action as a function
  return function(dispatch) {

    // submit email/password to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then(response => {
      // if good request...

      // update state to indicate user is authenticated
      dispatch({ type: AUTH_USER });
      // save the JWT token
      localStorage.setItem('token', response.data.token);
      // redirect to the route '/feature'
      browserHistory.push('/feature');

    })
    .catch(() => {
      // if bad, show error message to the user
      dispatch(authError('Incorrect Username or Password'));
    });
  }
}

// action function to return error message
export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signupUser({ email, password }) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(response => dispatch(authError(response.data.error)));
  }
}

// function to signout user and remove token
export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  }
}

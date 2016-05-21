import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/signin';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      {/*Show main App when user navigates to /*/}
      <Route path='/' component={App}>
        {/*Show Signin componenet when user navigates to '/signin'*/}
        <Route path='signin' component={Signin} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));

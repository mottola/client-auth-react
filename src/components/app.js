import React from 'react';
import { Component } from 'react';

// Import Header Component for use in main App
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        {/*Display Header Component*/}
        <Header />
        {/*Allows display of children routes*/}
        {this.props.children}
      </div>
    );
  }
}

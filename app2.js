import {
  createStore,
  applyMiddleware
} from 'redux';
import {
  Provider,
  connect
} from 'react-redux';
import React, { Component } from 'react';

const App = connect() {
  class App extends Component {
    render() {
      return (
        <div> { this.props.count } </div>
      );
    }
  }
}

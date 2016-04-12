import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import React, { Component } from 'react';
import { render } from 'react-dom';

function mapStateToProps(state, props) {
  return Object.assign({}, props, {
    count: state
  });
}

const App = connect(mapStateToProps) (
  class App extends Component {
    render() {
      return (
        <div>
          { this.props.count }
        </div>
      );
    }
  }
)

// Update state/estado
function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
}

// createStore(reducer, valor del estado al inicio);
const store = createStore(reducer, 0);

render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.body
);

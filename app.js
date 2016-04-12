import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import React, { Component } from 'react';
import { render } from 'react-dom';

function mapStateToProps(state, props) {
  return Object.assign({}, props, {
    count: state
  });
}

function actionIncrement() {
  return {
    type: 'INCREMENT'
  };
}
function actionDecrement() {
  return {
    type: 'DECREMENT'
  };
}

const App = connect(mapStateToProps) (
  class App extends Component {
    // Enviar actions al store
    handleSuma() {
      this.props.dispatch(
        actionIncrement()
      );
    }
    handleResta() {
      this.props.dispatch(
        actionDecrement()
      );
    }

    render() {
      return (
        <div>
        <button onClick={ this.handleResta.bind(this) }>
          RESTAR
        </button>
          <h1> { this.props.count } </h1>
          <button onClick={ this.handleSuma.bind(this) }>
            SUMAR
          </button>
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
    case 'DECREMENT':
      return state - 1;
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

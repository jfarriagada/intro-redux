import {
  createStore,
  applyMiddleware
} from 'redux';

function reducer(state=0, action={}){
  switch (action.type){
    case 'PLUS':
      return state + 1;
    default:
      return state;
  }
}

const store = createStore(reducer, 0);

store.subscribe(() => {
  document.write(
    JSON.stringify(store.getState())
  );
});

const action = {
  type : 'PLUS'
};

store.dispatch(action);

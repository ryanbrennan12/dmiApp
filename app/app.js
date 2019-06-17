import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

//app/containers/AddToDo/reducers
import 'babel-polyfill';
import toDoAppReducer from './containers/AddToDo/reducers.js';
import { loadToDoList } from './containers/ToDoListContainer/actions.js';
import rootSaga from '/Users/ryanbrennan/Desktop/repls/dmiapp/app/sagas';
import App from './containers/App/index.js';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(toDoAppReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.dispatch(loadToDoList());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);




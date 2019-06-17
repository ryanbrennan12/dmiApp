import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//app/containers/AddToDo/reducers
import 'babel-polyfill';
import toDoAppReducer from './containers/AddToDo/reducers.js';
import { loadToDoList } from './containers/ToDoListContainer/actions.js';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

import App from './containers/App/index.js';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(toDoAppReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.dispatch(loadToDoList());

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);





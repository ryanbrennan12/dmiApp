import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//app/containers/AddToDo/reducers
import toDoAppReducer from './containers/AddToDo/reducers.js';
import App from './containers/App/index.js';



const store = createStore(toDoAppReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);




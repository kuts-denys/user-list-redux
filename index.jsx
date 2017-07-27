import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import mainReducer from './reducers';
import UserList from './components/UserList/UserList';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  mainReducer,
  composeEnhancers(
    applyMiddleware(logger),
  ));
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <UserList />
  </Provider>,
  document.getElementById('root'));

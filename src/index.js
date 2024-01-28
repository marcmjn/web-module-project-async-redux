import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import App from './App';
import './index.css';
import {thunk} from 'redux-thunk';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore} from 'redux'

const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

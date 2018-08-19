import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import logger from 'redux-logger';
import { loadingBarMiddleware } from 'react-redux-loading-bar'

export default createStore(
  reducers,
  applyMiddleware(thunk, loadingBarMiddleware(), logger)
);
import { combineReducers } from 'redux';
import trainingsReducer from './trainings-reducer';
import { loadingBarReducer } from 'react-redux-loading-bar';

export default combineReducers({
  trainingsReducer,
  loadingBar: loadingBarReducer
});
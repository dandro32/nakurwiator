import { combineReducers } from 'redux';
import trainingsReducer from './trainings-reducer';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { reducer as notifReducer } from 'redux-notifications';


export default combineReducers({
  notifs: notifReducer,
  trainingsReducer,
  loadingBar: loadingBarReducer
});
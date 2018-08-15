import deepFreeze from 'deep-freeze';
import {getInitialState} from '../reducers/initial-state';

export const freeze = (...objList) => {
  objList.forEach((obj) => {
    deepFreeze(obj);
  } );
};

export const populateMockData = (count) => {
  const initialState = getInitialState();
  for(let i = 1; i <= count; i++) {
    initialState.data.push({id: i, [`prop${i}`]: `prop${i}`});
  }
  return {...initialState, isLoaded: true};
};
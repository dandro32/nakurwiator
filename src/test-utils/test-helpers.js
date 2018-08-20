import deepFreeze from 'deep-freeze';
import {getInitialState} from '../reducers/initial-state';
import React from 'react';

export const freeze = (...objList) => {
  objList.forEach((obj) => {
    deepFreeze(obj);
  } );
};

export const populateMockData = (count, reducerName) => {
  const initialState = getInitialState();
  for(let i = 1; i <= count; i++) {
    initialState[reducerName].data.push({id: i, [`prop${i}`]: `prop${i}`});
  }
  const returnState =  {...initialState};
  returnState[reducerName].isLoaded = true;
  return returnState;
};

export function mockComponent (ComponentToWrap) {
  return function ComponentToWrapWithLoading({...props}) {
    return (<ComponentToWrap {...props} />);
  }
}

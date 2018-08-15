import deepFreeze from 'deep-freeze';

export const freeze = (...objList) => {
  objList.forEach((obj) => {
    deepFreeze(obj);
  } );
};

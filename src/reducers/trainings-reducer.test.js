import reducer from './trainings-reducer';
import A from '../configs/redux-action-names.config';
import {freeze} from '../test-utils/test-helpers';


describe('Trainings Reducer tests', () => {
  const dummyResult = [
    {
      id: 1,
      prop1: 'prop1'
    },
    {
      id: 2,
      prop2: 'prop2'
    }
  ];

  it('should return initial state', () => {
    expect(reducer({}, {type: undefined})).toEqual({});
  });

  it('should handle GET_TRAININGS action', () => {
    const action = {type: A.GET_TRAININGS, data: dummyResult};
    const state = dummyResult;
    freeze(action, state);
    expect(reducer(state, action)).toEqual(dummyResult);
  });

  it('should handle GET_TRAINING action', () => {
    const action = {type: A.GET_TRAINING, data: 2};
    const state = dummyResult;
    freeze(action, state);
    expect(reducer(state, action)).toEqual(dummyResult[1]);
  });

  // it('should handle ADD_TRAININGS action', () => {

  // });

  // it('should handle UPDATE_TRAININGS action', () => {

  // });

  // it('should handle REMOVE_TRAININGS action', () => {

  // });



});
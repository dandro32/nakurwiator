import reducer from './trainings-reducer';
import A from '../configs/redux-action-names.config';
import {freeze, populateMockData} from '../test-utils/test-helpers';

describe('Trainings Reducer tests', () => {
  let dummyResult;

  beforeEach(() => {
    dummyResult = populateMockData(2);
  });

  it('should return initial state', () => {
    expect(reducer({}, {type: undefined})).toEqual({});
  });

  it('should handle GET_TRAININGS action', () => {
    const action = {type: A.GET_TRAININGS, data: dummyResult.data};
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

  it('should handle ADD_TRAINING action', () => {
    const action = {type: A.ADD_TRAINING, data: {id: 3, prop3: 'prop3'}};
    const state = dummyResult;
    freeze(action, state);
    expect(reducer(state, action).data.length).toBe(3);
  });

  it('should handle UPDATE_TRAINING action', () => {
    const updatedData = {id: 1, prop1: 'changed'};  
    const action = {type: A.UPDATE_TRAINING, data: updatedData};
    const state = dummyResult;
    freeze(action, state);
    expect(reducer(state, action).data).toEqual([updatedData, dummyResult.data[1]]);
  });

  it('should handle REMOVE_TRAINING action', () => {
    const action = {type: A.REMOVE_TRAINING, data: 2};
    const state = dummyResult;
    freeze(action, state);
    expect(reducer(state, action).data).toEqual([dummyResult.data[0]]);
  });

  it('should handle DATA_PENDING action', () => {
    const action = {type: A.DATA_PENDING};
    const state = dummyResult;
    freeze(action, state);
    expect(reducer(state, action)).toEqual({...dummyResult, isLoading: true});
  });

  it('should handle REQUEST_ERROR action', () => {
    const action = {type: A.REQUEST_ERROR, data: 'error'};
    const state = dummyResult;
    freeze(action, state);
    expect(reducer(state, action)).toEqual({...dummyResult, isError: 'error'});
  });


});
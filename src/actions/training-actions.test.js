import * as a from './training-actions';

describe('Training actions test', () => {
  const dummyInput = 'test';

  it('should check getTrainings function', () => {
    expect(a.getTrainings(dummyInput)).toEqual({type: 'GET_TRAININGS', data: dummyInput});    
  });

  it('should check getTraining function', () => {
    expect(a.getTraining(dummyInput)).toEqual({type: 'GET_TRAINING', data: dummyInput});    
  });

  it('should check addTraining function', () => {
    expect(a.addTraining(dummyInput)).toEqual({type: 'ADD_TRAINING', data: dummyInput});    
  });

  it('should check updateTraining function', () => {
    expect(a.updateTrainig(dummyInput)).toEqual({type: 'UPDATE_TRAINING', data: dummyInput});    
  });

  it('should check removeTraining function', () => {
    expect(a.removeTraining(dummyInput)).toEqual({type: 'REMOVE_TRAINING', data: dummyInput});    
  });

});
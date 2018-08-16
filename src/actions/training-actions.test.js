import * as a from './training-actions';
import * as api from './api-actions';

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

  it('should test apiGetTrainings function', () => {
    const spy = jest.spyOn(api, 'getData').mockReturnValue(true);
    expect(a.apiGetTrainings()).toBe(true);
    expect(spy).toHaveBeenCalledWith('trainings', a.getTrainings);
  });


  it('should test apiAddTraining function', () => {
    const spy = jest.spyOn(api, 'postData').mockReturnValue(true);
    expect(a.apiAddTraining('test')).toBe(true);
    expect(spy).toHaveBeenCalledWith('trainings', a.addTraining, 'test');
  });

  it('should test apiUpdateTraining function', () => {
    const updateObj = {id:1, test:'test'};
    const spy = jest.spyOn(api, 'putData').mockReturnValue(true);
    expect(a.apiUpdateTraining(updateObj)).toBe(true);
    expect(spy).toHaveBeenCalledWith('trainings/1', a.updateTrainig, updateObj);
  });
  
  it('should test apiUpdateTraining function', () => {
    const spy = jest.spyOn(api, 'deleteData').mockReturnValue(true);
    expect(a.apiRemoveTraining(1)).toBe(true);
    expect(spy).toHaveBeenCalledWith('trainings/1', a.removeTraining, 1);
  });
});
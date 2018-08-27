import {mapStateToProps, mapDispatchToProps} from './Training-new-container';
import * as act from './../../../actions/training-actions';
import INITIAL_TRAINING from '../../../models/initial-training';

describe('Trainings New Container Tests', () => {
  it('should check mapStateToProps function', () =>{
    expect(mapStateToProps()).toEqual({training: INITIAL_TRAINING});
  });


  it('should check mapDispatchToProps addTraining function', () => {
    const dispatch = jest.fn();
    const spy = jest.spyOn(act, 'apiAddTraining').mockReturnValue(true);
    const mockTraining = {};

    mapDispatchToProps(dispatch).addTraining(mockTraining);
    expect(dispatch.mock.calls[0][0]).toBe(true);
    expect(spy).toHaveBeenCalled();
  });
});
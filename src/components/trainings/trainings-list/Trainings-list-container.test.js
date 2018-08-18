import {mapDispatchToProps, mapStateToProps} from './Trainings-list-container';
import * as act from './../../../actions/training-actions';

describe('Trainings List Container Tests', () => {
  it('should check mapStateToProps function', () =>{
    const dummyState = {
      trainingsReducer: {
        trainings: 'test'
      }
    };
    expect(mapStateToProps(dummyState)).toEqual({trainings: 'test' });
  });
  it('should check mapDispatchToProps function', () => {
    const dispatch = jest.fn();
    const spy = jest.spyOn(act, 'apiGetTrainings').mockReturnValue(true);

    mapDispatchToProps(dispatch).fetchTrainings();
    expect(dispatch.mock.calls[0][0]).toBe(true);
    expect(spy).toHaveBeenCalled();
  });
});
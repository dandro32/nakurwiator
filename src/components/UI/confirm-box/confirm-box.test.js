import confirmBox from './confirm-box';
import * as trueConfirm from 'react-confirm-alert'; 


describe('Confirm Box test', () => {
  const mockFunc = jest.fn();
  it('should test if confirmAlert func is called with msg', () =>{
    const spy = jest.spyOn(trueConfirm, 'confirmAlert');
    confirmBox('title', mockFunc, 'msg');
    expect(spy).toHaveBeenCalled();
  }); 
    




});
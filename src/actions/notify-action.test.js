import notification from './notify-action';
import { actions as notifActions} from 'redux-notifications';


describe('Notification action test', () => {
  it('should return notification action to dispatch', () => {
    const spy = jest.spyOn(notifActions, 'notifSend').mockReturnValue(true);
    notification('msg', 'kind');    
    expect(spy).toHaveBeenCalledWith({message: 'msg', kind: 'kind', dismissAfter: 2000});
  });
});
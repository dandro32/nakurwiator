import { actions as notifActions} from 'redux-notifications';

const notification = (msg, kind) => {
  const { notifSend } = notifActions;
  return notifSend({
    message: msg,
    kind: kind,
    dismissAfter: 2000
  });
};

export default notification;
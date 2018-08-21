import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 


const confirmBox = (title, onConfirmFunc,  msg = '') => {
  confirmAlert({
    title: title,
    message: msg,
    buttons: [
      {
        label: 'Dawaj',
        onClick: () => onConfirmFunc()
      },
      {
        label: 'Ni',
      }
    ]
  });
};

export default confirmBox;
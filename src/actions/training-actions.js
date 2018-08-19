import A from '../configs/redux-action-names.config';
import * as api from './api-actions';
import notification from './notify-action';

const TRAINING_PATH = 'trainings';
 
export const getTrainings = (trainigs) => {
  return dispatch => {
    dispatch(notification('Pobrano treningi', 'success'));
    dispatch({
      type: A.GET_TRAININGS,
      data: trainigs
    });

  };
};

export const getTraining = (id) => {
  return dispatch => {
    dispatch(notification('Pobrano treningi', 'success'));
    dispatch({
      type: A.GET_TRAINING,
      data: id
    });

  };
};


export const addTraining = (training) => {
  return {
    type: A.ADD_TRAINING,
    data: training
  };
};

export const removeTraining = (id) => {
  return {
    type: A.REMOVE_TRAINING,
    data: id
  };
};

export const updateTrainig = (training) => {
  return {
    type: A.UPDATE_TRAINING,
    data: training
  };
};


export const apiGetTrainings = () => {
  return api.getData(`${TRAINING_PATH}`, getTrainings);
};

export const apiAddTraining = (training) => {
  return api.postData(`${TRAINING_PATH}`, addTraining, training);
};

export const apiUpdateTraining = (training) => {
  return api.putData(`${TRAINING_PATH}/${training.id}`, updateTrainig, training);
};

export const apiRemoveTraining = (id) => {
  return api.deleteData(`${TRAINING_PATH}/${id}`, removeTraining, id);
};

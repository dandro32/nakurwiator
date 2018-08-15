import A from '../configs/redux-action-names.config';
import * as api from './api-actions';
 
export const getTrainings = (trainigs) => {
  return {
    type: A.GET_TRAININGS,
    data: trainigs
  };
};

export const getTraining = (id) => {
  return {
    type: A.GET_TRAINING,
    data: id
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
  return api.getData('trainings', getTrainings);
};

export const apiAddTraining = (training) => {
  return api.postData('training', getTrainings, training);
};

export const apiUpdateTraining = (training) => {
  return api.putData(`trainings/${training.id}`, getTrainings, training);
};

export const apiRemoveTraining = (id) => {
  return api.deleteData(`trainings/${id}`, getTrainings, id);
};

import A from '../configs/redux-action-names.config';

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
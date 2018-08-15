import A from '../configs/redux-action-names.config';

const trainingReducer = ( state = [], action) => {
  switch(action.type) {
  case A.GET_TRAININGS: 
    return [...state];
  case A.GET_TRAINING: {
    const index = state.findIndex(obj => obj.id === action.data);
    return state[index];
  }
  default:
    return state;
  }
};

export default trainingReducer;
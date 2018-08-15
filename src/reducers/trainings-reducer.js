import A from '../configs/redux-action-names.config';

const trainingReducer = ( state = [], action) => {
  switch(action.type) {
  case A.GET_TRAININGS: 
    return [...state];
  case A.GET_TRAINING: {
    const index = state.findIndex(obj => obj.id === action.data);
    return state[index];
  }
  case A.ADD_TRAINING: 
    return [...state, action.data];
  case A.UPDATE_TRAINING: {
    const states = [...state];  
    const index = states.findIndex(obj => obj.id === action.data.id);
    states[index] = action.data;
    return states;
  }
  case A.REMOVE_TRAINING: 
    return state.filter(obj => obj.id !== action.data);
  

  default:
    return state;
  }
};

export default trainingReducer;
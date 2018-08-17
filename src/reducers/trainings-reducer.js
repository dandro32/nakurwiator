import A from '../configs/redux-action-names.config';
import { getInitialState} from './initial-state';



const trainingReducer = ( state = getInitialState(), action) => {
  switch(action.type) {
  case A.DATA_PENDING: 
    return {...state, trainings: {...state.trainings, isLoading: true}};  
  case A.REQUEST_ERROR:
    return {...state,  trainings: {...state.trainings, isLoading: false, isError: action.data}};  
  case A.GET_TRAININGS: 
    return {...state,  trainings: {...state.trainings, isLoading: false, isLoaded: true, data: action.data }};
  case A.GET_TRAINING: {
    const index = state.trainings.data.findIndex(obj => obj.id === action.data);
    return state[index];
  }
  case A.ADD_TRAINING: 
    return {...state,  trainings: {...state.trainings, isLoading: false, isLoaded: true, data: [...state.data, action.data]}};
  case A.UPDATE_TRAINING: {
    const states = [...state.data];  
    const index = states.findIndex(obj => obj.id === action.data.id);
    states[index] = action.data;
    return {...state,  trainings: {...state.trainings, isLoading: false, isLoaded: true, data: states}};
  }
  case A.REMOVE_TRAINING: {
    const newState = state.data.filter(obj => obj.id !== action.data);
    return {...state,  trainings: {...state.trainings, isLoading: false, isLoaded: true, data: newState}}; 
  }
  default:
    return state;
  }
};

export default trainingReducer;
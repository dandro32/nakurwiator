import A from '../configs/redux-action-names.config';
import { getInitialState} from './initial-state';



const trainingReducer = ( state = getInitialState(), action) => {
  const trainingsData = state.trainings.data;
  switch(action.type) {
  case A.DATA_PENDING: 
    return {...state, trainings: {...state.trainings, isLoading: true, isLoaded: false}};  
  case A.REQUEST_ERROR:
    return {...state,  trainings: {...state.trainings, isLoading: false, isError: action.data}};  
  case A.GET_TRAININGS: 
    return {...state,  trainings: {...state.trainings, isLoading: false, isLoaded: true, data: action.data }};
  case A.GET_TRAINING: {
    const index = trainingsData.findIndex(obj => obj.id === action.data);
    return state[index];
  }
  case A.ADD_TRAINING: 
    return {...state,  trainings: {...state.trainings, isLoading: false, isLoaded: true, data: [...trainingsData, action.data]}};
  case A.UPDATE_TRAINING: {
    const states = [...trainingsData];  
    const index = states.findIndex(obj => obj.id === action.data.id);
    states[index] = action.data;
    return {...state,  trainings: {...state.trainings, isLoading: false, isLoaded: true, data: states}};
  }
  case A.REMOVE_TRAINING: {
    const newState = trainingsData.filter(obj => obj.id !== action.data);
    return {...state,  trainings: {...state.trainings, isLoading: false, isLoaded: true, data: newState}}; 
  }
  default:
    return state;
  }
};

export default trainingReducer;
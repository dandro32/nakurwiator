import TrainingsList from './Trainings-list';
import { connect } from 'react-redux';
import * as act from './../../../actions/training-actions';

export const mapStateToProps = ({trainingsReducer}) => ({
  trainings: trainingsReducer.trainings
});

export const  mapDispatchToProps = dispatch =>
  ({
    deleteTraining: (id) =>dispatch(act.apiRemoveTraining(id)),
    fetchTrainings:() => dispatch(act.apiGetTrainings())
  });

const TrainingListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainingsList);

export default TrainingListContainer;
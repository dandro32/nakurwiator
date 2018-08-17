import { TrainingsList } from './Trainings-list';
import { connect } from 'react-redux';
import * as act from './../../../actions/training-actions';

const mapStateToProps = state => ({
  trainings: state.trainingsReducer.trainings
});

const mapDispatchToProps = dispatch =>
  ({
    fetchTrainings:() => dispatch(act.apiGetTrainings())
  });

const TrainingListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainingsList);

export default TrainingListContainer;
import { TrainingsList } from './Trainings-list';
import { connect } from 'react-redux';
import * as act from './../../../actions/training-actions';

const mapStateToProps = state =>
  ({
    trainings: [...state.trainings]
  });

const mapDispatchToProps = dispatch =>
  ({
    apiGetTrainings() {
      dispatch(act.apiGetTrainings());
    }
  });

const TrainingListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainingsList);

export default TrainingListContainer;
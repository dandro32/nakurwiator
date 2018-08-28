import TrainingNew from './Training-new';
import { connect } from 'react-redux';
import * as act from '../../../actions/training-actions';
import INITIAL_TRAINING from '../../../models/initial-training';

export const mapStateToProps = () => ({
  training: INITIAL_TRAINING
});

export const  mapDispatchToProps = dispatch =>
  ({
    addTraining: (training) =>dispatch(act.apiAddTraining(training)),
  });

const TrainingNewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainingNew);

export default TrainingNewContainer;
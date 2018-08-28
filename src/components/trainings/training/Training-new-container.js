import TrainingNew from './Training-new';
import { connect } from 'react-redux';
import * as act from '../../../actions/training-actions';


export const  mapDispatchToProps = dispatch =>
  ({
    addTraining: (training) =>dispatch(act.apiAddTraining(training)),
  });

const TrainingNewContainer = connect(
  mapDispatchToProps
)(TrainingNew);

export default TrainingNewContainer;
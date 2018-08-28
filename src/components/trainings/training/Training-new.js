import React, {Component} from 'react';
import TrainingForm from './Training-form';
import PropTypes from 'prop-types';
import { faDumbbell} from '@fortawesome/free-solid-svg-icons';

class TrainingNew extends Component {
  
  static propTypes = {
    addTraining: PropTypes.func.isRequired,
    training: PropTypes.object.isRequired
  };

  addTraining(training) {
    const {addTraining} = this.props;
    addTraining(training);
  }

  render() {
    const {training} = this.props;
    return(  
    <TrainingForm 
      isLoading={false} 
      isLoaded={true} 
      title='Nowy trening'
      icon={faDumbbell}
      training={training}
      addTraining={(e)=>this.addTraining(training, e)}
      />);
  }
}

export default TrainingNew;

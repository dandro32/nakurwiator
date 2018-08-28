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
    return(  
    <TrainingForm 
      isLoading={false} 
      isLoaded={true} 
      title='Nowy trening'
      icon={faDumbbell}
      addTraining={(e)=>this.addTraining(e)}
      />);
  }
}

export default TrainingNew;

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class TrainingsList extends Component {
    constructor() {
        super();
        console.log(this.props);
    }  
    static propTypes = {
        apiGetTrainings: PropTypes.func.isRequired,
        trainings: PropTypes.array.isRequired
    };


  componentDidMount() {
    this.props.apiGetTrainings();
  }

  render() {
    const trainings = this.props.trainings;
    const mappedTrainings = trainings.map((training) => {
      return <p key={training.id}>{training.name}</p>;
    });
    return(
      {mappedTrainings}
    );
  }
}

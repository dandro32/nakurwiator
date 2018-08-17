import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class TrainingsList extends Component {
    constructor() {
        super();
      
    }  
    static propTypes = {
        fetchTrainings: PropTypes.func.isRequired,
        trainings: PropTypes.array.isRequired
    };


  componentDidMount() {
    const {fetchTrainings} = this.props;
    fetchTrainings();
  }

  render() {
    const { isLoading, isError, isLoaded, data } = this.props.trainings;
    console.log( this.props.trainings);
    console.log(data)
    const mappedTrainings = data.map((training) => {
      return <p key={training.id}>{training.name}</p>;
    });
    return(
      <div> 
        <h1>
      test
      </h1>
      {isLoaded}? {mappedTrainings} : loading
        </div>
     
      
    );
  }
}

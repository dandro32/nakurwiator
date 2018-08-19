import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Loader from '../../UI/loader/Loader';
import SectionHeading from '../../UI/section-heading/Section-heading';
import { faDumbbell} from '@fortawesome/free-solid-svg-icons';
export class TrainingsList extends Component {
    constructor() {
        super();
      
    }  
    static propTypes = {
        fetchTrainings: PropTypes.func.isRequired,
        trainings: PropTypes.shape({
          data: PropTypes.array.isRequired,
          isLoading: PropTypes.bool.isRequired,
          isLoaded:PropTypes.bool.isRequired, 
          isError: PropTypes.bool.string
        })
    };


  componentDidMount() {
    const {fetchTrainings} = this.props;
    fetchTrainings();
  }

  render() {
    const { isLoading, isError, isLoaded, data } = this.props.trainings;
    const mappedTrainings = data.map((training) => {
      return <p key={training.id}>{training.name}</p>;
    });
    return(
      <div> 
        {isLoading && <Loader />}
        <SectionHeading icon={faDumbbell} title='Lista treningów' />

        {isLoaded &&  mappedTrainings}
      </div>
    );
  }
}

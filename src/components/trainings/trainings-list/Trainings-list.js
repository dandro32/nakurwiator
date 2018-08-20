import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SectionComponent from '../../UI/section/Section'
import { faDumbbell} from '@fortawesome/free-solid-svg-icons';
import TableWrapper from '../../UI/table/Table-wrapper';

const SectionLoadingComponent = SectionComponent(TableWrapper);

export class TrainingsList extends Component {

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
    const { isLoading, isLoaded, data } = this.props.trainings;
    return(
      <div> 
        <SectionLoadingComponent 
          isLoading={isLoading} 
          isLoaded={isLoaded} 
          title='Lista ćwiczeń'
          icon={faDumbbell}
          data={data}
          />
      </div>
    );
  }
}

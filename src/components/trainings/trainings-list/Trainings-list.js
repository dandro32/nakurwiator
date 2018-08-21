import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { faDumbbell} from '@fortawesome/free-solid-svg-icons';
import TableWrapper from '../../UI/table/Table-wrapper';

class TrainingsList extends Component {

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

  getTableColumns() {
    return [{
      Header: 'ID',
      accessor: 'id' // String-based value accessors!
    }, {
      Header: 'Data',
      accessor: 'date',
    }, {
      Header: 'Twoja masa',
      accessor: 'mass',
    }, {
      Header: 'Białeczko',
      accessor: 'protein',
    }, {
      Header: 'Ile cisłeś',
      accessor: 'mass',
    }, {
      Header: 'Ćwiczonka',
      accessor: 'exercises',
    },
    {
      Header: 'Kaj to robiłeś',
      accessor: 'where',
    }
  ]
  
  }

  render() {
    const { isLoading, isLoaded, data } = this.props.trainings;
    const columns = this.getTableColumns();
    return(
      <div> 
        <TableWrapper 
          isLoading={isLoading} 
          isLoaded={isLoaded} 
          title='Lista ćwiczeń'
          icon={faDumbbell}
          data={data}
          columns={columns}
          />
      </div>
    );
  }
}

export default TrainingsList;
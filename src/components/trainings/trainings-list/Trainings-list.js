import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { faDumbbell} from '@fortawesome/free-solid-svg-icons';
import TableWrapper from '../../UI/table/Table-wrapper';
import * as moment from 'moment';

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

  deleteTraining(id) {
    const {deleteTraining} = this.props;
    deleteTraining(id);
  }

  getTableColumns() {
    return [{
      Header: 'ID',
      accessor: 'id' // String-based value accessors!
    }, {
      id: 'date',
      Header: 'Data',
      accessor:  d => {
        return moment(d.date).local().format("DD-MM-YYYY hh:mm:ss")
      }
    }, {
      id: 'mass',
      Header: 'Twoja masa',
      accessor: obj => {
        return `${obj.mass} kg`;
      }
    }, {
      Header: 'Białeczko',
      accessor: 'protein',
    }, {
      id: 'time',
      Header: 'Ile cisłeś',
      accessor: obj => {
        return `${obj.time} min`;
      }
    }, {
      id: 'exercises',
      Header: 'Ćwiczonka',
      accessor: obj => {
        return Array.isArray(obj.exercises) ? obj.exercises.length : 0;
      }
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
          deleteRow={this.deleteTraining.bind(this)}
          />
      </div>
    );
  }
}

export default TrainingsList;
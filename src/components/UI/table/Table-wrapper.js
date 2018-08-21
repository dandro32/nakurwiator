import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SectionComponent from '../../UI/section/Section';
import TableActionCell from './Table-action-cell';
import ReactTable from 'react-table'
import 'react-table/react-table.css';


class TableWrapper extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired
  };

  addActionsCellToRow(columns, linkTo) {
    if(Array.isArray(columns)) {
      const actionCell = {
        id: 'Akcje',
        accessor: 'id',
        Cell: ({value}) => (
         <TableActionCell id={value} linkTo={linkTo} deleteFunc={this.deleteRow.bind(this)} />
        )
      };

      return [...columns, actionCell];
    }
  }

  deleteRow(id) {
    console.log(id);
    console.log('wywalamy ' + id)
  }

  render() {
    let { data, columns } = this.props;
    columns = this.addActionsCellToRow(columns, 'trainings');
    return (
      <div>
        <ReactTable
        data={data}
        columns={columns}
      />
      </div>
    );
  }

}

export default SectionComponent(TableWrapper);
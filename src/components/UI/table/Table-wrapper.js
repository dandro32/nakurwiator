import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SectionComponent from '../../UI/section/Section';
import TableActionCell from './Table-action-cell';
import ReactTable from 'react-table'
import 'react-table/react-table.css';
import confirmBox from '../../UI/confirm-box/confirm-box';

class TableWrapper extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    deleteRow: PropTypes.func.isRequired,
  };

  addActionsCellToRow(columns) {
    if(Array.isArray(columns)) {
      const actionCell = {
        Header: 'Akcje',
        accessor: 'id',
        Cell: ({value}) => (
         <TableActionCell id={value} deleteFunc={this.deleteRow.bind(this)} />
        )
      };
      return [...columns, actionCell];
    }
    return [...columns];
  }

  deleteRow(id) {
    const removeFunction = () => {
      this.props.deleteRow(id);
    }
    confirmBox('test', removeFunction);
  }

  render() {
    let { data, columns } = this.props;
    columns = this.addActionsCellToRow(columns);
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
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const TableActionCell = ({ id, deleteFunc}) => {
  return (
    <div className='row justify-content-around'>
      <Link to={id}>
        <FontAwesomeIcon icon={faEye} />
      </Link>
      <Link to={`${id}/edit`}>
        <FontAwesomeIcon icon={faEdit} />
      </Link>
      <span>
        <FontAwesomeIcon className='tableDeleteButton' icon={faTrash} onClick={()=> deleteFunc(id)} />
      </span>
    </div>
  );
};

TableActionCell.propTypes = {
  id: PropTypes.string.isRequired,
  deleteFunc: PropTypes.func.isRequired
};

export default TableActionCell;

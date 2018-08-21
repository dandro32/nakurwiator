import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const TableActionCell = ({linkTo, id, deleteFunc}) => {
  return (
    <div>
      <Link to={`${linkTo}/${id}`}>
        <FontAwesomeIcon icon={faEye} />
      </Link>
      <Link to={`${linkTo}/${id}/edit`}>
        <FontAwesomeIcon icon={faEdit} />
      </Link>
      <FontAwesomeIcon className='tableDeleteButton' icon={faTrash} onClick={()=> deleteFunc(id)} />
    </div>
  );
};

TableActionCell.propTypes = {
  linkTo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteFunc: PropTypes.func.isRequired
};

export default TableActionCell;

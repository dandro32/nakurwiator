import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const NavigationRow = ({row}) => {
  return (
    <div className="row d-flex align-items-center">
      <div className="col-4">
        <FontAwesomeIcon icon={row.icon} />
      </div>
      <div className="col-8">
        <span>{row.name}</span>
      </div>
    </div>
  );
};

NavigationRow.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired
  })
};

export default NavigationRow;


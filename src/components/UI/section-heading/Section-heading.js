import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const SectionHeading = ({icon, title}) => {
  return (
    <div className='row justify-content-center mt-5'>
      <h2><FontAwesomeIcon icon={icon} /> {title}</h2>
    </div>
  );
};

SectionHeading.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default SectionHeading;
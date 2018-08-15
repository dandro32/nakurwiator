import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation/Navigation';
import '../../../styles/common.css';

const Header = ({user}) => {
  return (
    <header className="row navbar-fixed-bottom b-bottom sticky-top">
      <div className="col">
        <Navigation className="float-left" />
      </div>
      <div className="col-3 text-center">
        <span className='align-middle'>{user.email}</span>
      </div>
    </header>);
};

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  })
};

export default Header;


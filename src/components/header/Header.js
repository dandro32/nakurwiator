import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation/Navigation';

const Header = ({user}) => {
  return (
    <header className="row">
      <div className="col">
        <Navigation className="float-left" />
      </div>
      <div className="col-3">
        <span>{user.email}</span>
      </div>
    </header>);
};

Header.propTypes = {
  user: PropTypes.object.isRequired
};

export default Header;


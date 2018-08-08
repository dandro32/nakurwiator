import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import MenuNavigationConfig from '../../../configs/menu-navigation.config';
import './React-burger-nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const Navigation = () => {
  const menuItems = MenuNavigationConfig.map((item) => {
    return (<Link to={item.href} key={item.id} id={item.id} className="menu-item">
      <div className="row d-flex align-items-center">
        <div className="col-4">
          <FontAwesomeIcon icon={item.icon} />
        </div>
        <div className="col-8">
          <span> {item.name}</span>
        </div>
      </div>
    </Link>);
  });

  return (
    <Menu>
      {menuItems}
    </Menu>
  );
};

export default Navigation;
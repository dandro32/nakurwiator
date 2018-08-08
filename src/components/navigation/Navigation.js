import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import MenuItemsConfig from '../../configs/menu-items.config';
import './React-burger-nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Navigation = () => {
  const menuItems = MenuItemsConfig.map((item) => {
    return (<a key={item.id} id={item.id} className="menu-item" href={item.href}>
      <div className="row d-flex align-items-center">
        <div className="col-4">
          <FontAwesomeIcon icon={item.icon} />
        </div>
        <div className="col-8">
          <span> {item.name}</span>
        </div>
      </div>
    </a>);
  });

  return (
    <Menu>
      {menuItems}
    </Menu>
  );
};

export default Navigation;
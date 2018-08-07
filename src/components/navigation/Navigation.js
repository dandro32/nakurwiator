import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import MenuItemsConfig from '../../configs/menu-items.json';


const Navigation = () => {
  const menuItems = MenuItemsConfig.map((item) => {
    return (<a key={item.id} id={item.id} className="menu-item" href={item.href}>{item.name}</a>);
  });

  return (
    <Menu>
      {menuItems}
    </Menu>
  );
};

export default Navigation;
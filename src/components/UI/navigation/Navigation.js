import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';
import MenuNavigationConfig from '../../../configs/menu-navigation.config';
import './React-burger-nav.css';
import { NavLink as Link } from 'react-router-dom';
import NavigationRow from './NavigationRow';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  closeMenu(event) {
    event.preventDefault();
    this.setState({
      isOpen: false
    });
  }

  render() {
    const menuItems = MenuNavigationConfig.map((item) => {
      return (
        <Link onClick={()=>this.closeMenu} to={item.href} key={item.id} id={item.id}
          className="menu-item"activeClassName="activeNavLink">
          <NavigationRow row={item}></NavigationRow>
        </Link>);
    });
  
    return (
      <Menu isOpen={ this.state.isOpen }>
        {menuItems}
      </Menu>
    );
  }


}

export default Navigation;
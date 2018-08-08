import React from 'react';
import Navigation from './Navigation';
import ShallowRenderer from 'react-test-renderer/shallow';
import { slide as Menu } from 'react-burger-menu';
import menuNavigationConfigs from '../../../configs/menu-navigation.config';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

jest.mock('./NavigationRow', () => 'navigation row');

describe('Navigation Component test', () => {
  let shallowRenderer;
  let shallowRendererResult;

  beforeEach(() => {

    shallowRenderer = new ShallowRenderer();
    shallowRenderer.render(<Navigation />);
    shallowRendererResult = shallowRenderer.getRenderOutput();
  });

  it('should rendred Menu component inside navigation', () => {
    expect(shallowRendererResult.type).toEqual(Menu);
  });

  it('should render exact href links inside Menu component', () => {
    expect(shallowRendererResult.props.children.length).toBe(5);
  });

  it('links should have all properties of burger menu', () => {
    const burgerLinks = shallowRendererResult.props.children;
    burgerLinks.map((link, i) => {
      expect(link.type).toBe(Link);
      expect(link.props.id).toBe(menuNavigationConfigs[i].id);
      expect(link.props.to).toBe(menuNavigationConfigs[i].href);
      expect(link.props.children.type).toBe('navigation row');
    });
  });

//TODO: test close menu and state isOpen
});
import React from 'react';
import Navigation from './Navigation';
import ShallowRenderer from 'react-test-renderer/shallow';
import { slide as Menu } from 'react-burger-menu';
import menuNavigationConfigs from '../../configs/menu-navigation.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  it('href links should have all properties of burger menu', () => {
    const burgerLinks = shallowRendererResult.props.children;
    burgerLinks.map((link, i) => {
      expect(link.type).toBe('a');
      expect(link.props.id).toBe(menuNavigationConfigs[i].id);
      expect(link.props.href).toBe(menuNavigationConfigs[i].href);
      expect(link.props.children[0].type).toEqual(FontAwesomeIcon);
      expect(link.props.children[1]).toBe(menuNavigationConfigs[i].name);
    });
  });


});
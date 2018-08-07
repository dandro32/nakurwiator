import React from 'react';
import Navigation from './Navigation';
import ShallowRenderer from 'react-test-renderer/shallow';
import { slide as Menu } from 'react-burger-menu';
import menuItemsConfigs from '../../configs/menu-items.json';

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
      expect(link.props.id).toBe(menuItemsConfigs[i].id);
      expect(link.props.href).toBe(menuItemsConfigs[i].href);
      expect(link.props.children).toBe(menuItemsConfigs[i].name);
    });
  });


});
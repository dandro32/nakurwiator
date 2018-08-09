import React from 'react';
import Main from './Main';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Main component tests', ()=> {
  let shallowRendererResult;
  beforeEach(() => {
    const shallowRenderer = new ShallowRenderer();
    shallowRenderer.render(<Main />);
    shallowRendererResult = shallowRenderer.getRenderOutput();
  });

  it('renders correctly', () => {
    expect(shallowRendererResult).toMatchSnapshot();
  });
});
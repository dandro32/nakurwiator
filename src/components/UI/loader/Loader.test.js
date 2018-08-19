import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Loader from './Loader';

describe('Loader component tests', ()=> {
  it('should render loader component', () => {
    const shallowRenderer = new ShallowRenderer();
    shallowRenderer.render(<Loader />);
    expect(shallowRenderer.getRenderOutput()).toMatchSnapshot();
  });

});
import React from 'react';
import InputText from './Input-text';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('InputText test', () => {
  let shallowRendererResult;
  const mockFunc = jest.fn();
  beforeEach(() => {
    const shallowRenderer = new ShallowRenderer();
    shallowRenderer.render(<InputText label="label" value="value" required={true} onChange={mockFunc} name='name' />);
    shallowRendererResult = shallowRenderer.getRenderOutput();
  });

  it('should check is render is properly output', () => {
    expect(shallowRendererResult).toMatchSnapshot();
  });

});
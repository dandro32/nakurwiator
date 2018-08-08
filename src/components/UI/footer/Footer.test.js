import Footer from './Footer';
import React from 'react';
import TestRenderer from 'react-test-renderer';

describe('Footer test', () => {
  let renderedFooter;
  beforeEach(() => {
    renderedFooter = TestRenderer.create(<Footer />).toJSON();
  });

  it('should check rendered footer component to open with footer tag', () => {
    expect(renderedFooter.type).toBe('footer');
  });

  it('should check rendered footer component span tag with copyright', () => {
    expect(renderedFooter.children[0].children[0].children[0]).toEqual('CopyRight By Daniel');
  });

});

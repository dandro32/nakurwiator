import Header from './Header';
import React from 'react';
import TestRenderer from 'react-test-renderer';

jest.mock('../navigation/Navigation', () => 'Navigation Component');


describe('Header tests', () => {
  const mockUser = {
    email: 'random@email.com'
  };
  let renderedHeader;

  beforeEach(() => {
    renderedHeader = TestRenderer.create(
      <Header user={mockUser}/>
    ).toJSON();
  });


  it('should check Header rendered to open with header tag', () => {
    expect(renderedHeader.type).toBe('header');
  });

  it('should check Header bootstrap classes', () => {
    expect(renderedHeader.props.className).toBe('row navbar-fixed-bottom b-bottom');
  });

  it('should check if navigation component is set in first div', () => {
    const children = renderedHeader.children[0];
    expect(children.type).toEqual('div');
    expect(children.props.className).toEqual('col');
    expect(children.children[0].type).toEqual('Navigation Component');
  });

  it('should check if useremail is set in second div', () => {
    const children = renderedHeader.children[1];
    expect(children.type).toEqual('div');
    expect(children.props.className).toEqual('col-3 text-center');
    expect(children.children[0].children[0]).toEqual(mockUser.email);
  });

});
import React from 'react';
import TableActionCell from './Table-action-cell';
import TestRenderer from 'react-test-renderer';
import {HashRouter as Router } from 'react-router-dom';

describe('TableActionCell component tests', () => {
  let renderer;
  let json;
  const mockDeleteFunc = jest.fn();
  const mockLinkTo = 'test';
  const mockId = '4';

  beforeEach(() => {
    renderer = TestRenderer.create(
      <Router><TableActionCell id={mockId} linkTo={mockLinkTo} deleteFunc={mockDeleteFunc}/></Router>
    );
    json = renderer.toJSON();
  });

  it('should render properly component output', () => {
    expect(json).toMatchSnapshot();
  });

  it('should call delete function on trash icon click', () => {
    expect(mockDeleteFunc.mock.calls.length).toBe(0);
    renderer.root.findByProps({className: 'tableDeleteButton'}).props.onClick();
    expect(mockDeleteFunc.mock.calls[0][0]).toEqual(mockId);
  });

});
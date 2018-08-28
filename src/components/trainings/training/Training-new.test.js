import React from 'react';
import TestRenderer from 'react-test-renderer';
import TrainingNew from './Training-new';

jest.mock('./Training-form', () => 'Training-form');

describe('Training New component tests', () => {
  let componentInstance;
  let json;
  const mockAddTraining = jest.fn();
  const mockTraining = {
    test: 'test'
  };
  beforeEach(() => {
    const renderer = TestRenderer.create(
      <TrainingNew addTraining={mockAddTraining} training={mockTraining}/>
    );
    componentInstance = renderer.root.instance;
    json = renderer.toJSON();
  });

 
  it('should render properly component output', () => {
    expect(json).toMatchSnapshot();
  });

  it('should new training was called', () => {
    const result = 'test';
    componentInstance.addTraining(result);
    expect(mockAddTraining.mock.calls[0][0]).toBe(result);
  });

});
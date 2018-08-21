import React from 'react';
import TestRenderer from 'react-test-renderer';
import TrainingsList from './Trainings-list';



jest.mock('../../UI/table/Table-wrapper', () => 'Table wrapper');


describe('Training List components', () => {
  let componentInstance;
  let json;
  const mockFetchTrainings = jest.fn();
  const mockTrainings = {
    data: ['test'],
    isLoading: false,
    isLoaded: true, 
    isError: false
  };
  beforeEach(() => {
    const renderer = TestRenderer.create(
      <TrainingsList fetchTrainings={mockFetchTrainings} trainings={mockTrainings}/>
    );
    componentInstance = renderer.getInstance();
    json = renderer.toJSON();
  });

  it('should render properly component output', () => {
    expect(json).toMatchSnapshot();
  });

});
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
    componentInstance = renderer.root.instance;
    json = renderer.toJSON();
  });

  it('should called fetchTraining method on didMount', () => {
    expect(mockFetchTrainings.mock.calls.length).toBe(1);
  });

  it('should render properly component output', () => {
    expect(json).toMatchSnapshot();
  });

  it('should check columns passed to table wrapper', () => {
    expect(componentInstance.getTableColumns().length).toEqual(7);
  });

});
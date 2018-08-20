import React from 'react';
import TestRenderer from 'react-test-renderer';
import TrainingsList from './Trainings-list';

jest.mock('../../UI/section/Section', () => 'SectionLoadingComponent');
jest.mock('../../UI/table/Table-wrapper', () => () => 'table-wrapper');
const mockFetchTrainings = jest.fn();

describe('Training List components', () => {
  let componentInstance;
  let json;
  const mockTrainings = {
    data: [1,2,3],
    isLoading: false,
    isLoaded: true, 
  };
  beforeEach(() => {
    const renderer = TestRenderer.create(
      <TrainingsList fetchTrainings={mockFetchTrainings} trainings={mockTrainings}/>
    );
    componentInstance = renderer.getInstance();
    json = renderer.toJSON();
  });

  it('should render properly component output', () => {
    expect(json).toEqual(3);
  });

});
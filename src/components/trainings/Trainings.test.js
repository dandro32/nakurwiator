import React from 'react';
import Trainings from './Trainings';
import TestRenderer from 'react-test-renderer';

jest.mock('../UI/dashboard/Dashboard', () => 'Dashboard component');

describe('Trainings component tests', ()=> {
  let result;

  beforeEach(() => {
    result = TestRenderer.create(
      <Trainings />
    ).toTree();

  });

  it('renders correctly', () => {
    expect(result).toMatchSnapshot();
  });
});
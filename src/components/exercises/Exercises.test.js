import React from 'react';
import Exercises from './Exercises';
import TestRenderer from 'react-test-renderer';

jest.mock('../UI/dashboard/Dashboard', () => 'Dashboard component');

describe('Exercises component tests', ()=> {
  let result;

  beforeEach(() => {
    result = TestRenderer.create(
      <Exercises />
    ).toTree();

  });

  it('renders correctly', () => {
    expect(result).toMatchSnapshot();
  });
});
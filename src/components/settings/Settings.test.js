import React from 'react';
import Settings from './Settings';
import TestRenderer from 'react-test-renderer';

jest.mock('../shared/dashboard/Dashboard', () => 'Dashboard component');

describe('Settings component tests', ()=> {
  let result;

  beforeEach(() => {
    result = TestRenderer.create(
      <Settings />
    ).toTree();

  });

  it('renders correctly', () => {
    expect(result).toMatchSnapshot();
  });
});
import React from 'react';
import Extras from './Extras';
import TestRenderer from 'react-test-renderer';

jest.mock('../shared/dashboard/Dashboard', () => 'Dashboard component');

describe('Extras component tests', ()=> {
  let result;

  beforeEach(() => {
    result = TestRenderer.create(
      <Extras />
    ).toTree();

  });

  it('renders correctly', () => {
    expect(result).toMatchSnapshot();
  });
});
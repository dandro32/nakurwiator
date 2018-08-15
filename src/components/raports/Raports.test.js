import React from 'react';
import Raports from './Raports';
import TestRenderer from 'react-test-renderer';

jest.mock('../UI/dashboard/Dashboard', () => 'Dashboard component');

describe('Raports component tests', ()=> {
  let result;

  beforeEach(() => {
    result = TestRenderer.create(
      <Raports />
    ).toTree();

  });

  it('renders correctly', () => {
    expect(result).toMatchSnapshot();
  });
});
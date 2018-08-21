import React from 'react';
import TableWrapper from './Table-wrapper';
import TestRenderer from 'react-test-renderer';

jest.mock('ReactTable', () => 'react-table')

describe('TableActionCell component tests', () => {
  let renderer;
  let json;
  const mockData = [1,2,3];
  const mockColumns = [{},{}];
  const deleteStubFunc = jest.fn();

  beforeEach(() => {
    renderer = TestRenderer.create(
      <TableWrapper data={mockData} columns={mockColumns} deleteRow={deleteStubFunc}/>
    );
    json = renderer.toJSON();
  });

  it('should render properly component output', () => {
    expect(json).toMatchSnapshot();
  });



});
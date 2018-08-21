import React from 'react';
import TableWrapper from './Table-wrapper';
import TestRenderer from 'react-test-renderer';
import { faDumbbell} from '@fortawesome/free-solid-svg-icons';


jest.mock('react-table', () => 'ReactTable');
jest.mock('./Table-action-cell', () => 'TableActionCell');

describe('TableActionCell component tests', () => {
  let json;
  const mockData = [1,2,3];
  const mockColumns = [{},{}];
  const deleteStubFunc = jest.fn();

  beforeEach(() => {
    const renderer = TestRenderer.create(
      <TableWrapper isLoaded={true} icon={faDumbbell} title='test' data={mockData} columns={mockColumns} deleteRow={deleteStubFunc}/>
    );
    json = renderer.toJSON();
  });

  it('should render properly component output', () => {
    expect(json).toMatchSnapshot();
  });



});
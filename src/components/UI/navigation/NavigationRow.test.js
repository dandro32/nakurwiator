import React from 'react';
import NavigationRow from './NavigationRow';
import TestRenderer from 'react-test-renderer';
import { faDumbbell} from '@fortawesome/free-solid-svg-icons';

describe('NavigationRow component test', () => {
  const mockRow = {
    id: 'test',
    href: '/test',
    name: 'test',
    icon: faDumbbell
  };
  let renderedRow;
  beforeEach(() => {
    renderedRow = TestRenderer.create(
      <NavigationRow row={mockRow}/>
    ).toJSON();
  });

  it('should check NavigationRow rendered to open with div tag and bootstrap classes', () => {
    expect(renderedRow.type).toBe('div');
    expect(renderedRow.props.className).toBe('row d-flex align-items-center');
  });

  it('should check NavigationRow first column with icon', () => {
    const column = renderedRow.children[0];
    expect(column.type).toBe('div');
    expect(column.children[0].type).toBe('svg');
    expect(column.children[0].props['data-prefix']).toBe('fas');
    expect(column.children[0].props['data-icon']).toBe('dumbbell');
  });

  it('should check NavigationRow second column with title', () => {
    const column = renderedRow.children[1];
    expect(column.type).toBe('div');
    expect(column.children[0].type).toBe('span');
    expect(column.children[0].children[0]).toBe('test');
  });
      

});
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { faDumbbell} from '@fortawesome/free-solid-svg-icons';
import SectionHeading from './Section-heading';

describe('Section heading test', () => {
  it('should render section heading component', () => {
    const render = TestRenderer.create(
      <SectionHeading icon={faDumbbell} title='test' />
    ).toTree();
    expect(render).toMatchSnapshot();  
  });
});
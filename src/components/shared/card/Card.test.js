import React from 'react';
import Card from './Card';
import {HashRouter as Router} from 'react-router-dom';
import TestRenderer from 'react-test-renderer';

describe('Card component tests', ()=> {
  let result;
  const mockCard = {
    title: 'title',
    imgSrc: 'imgSrc',
    desc: 'desc',
    href: 'href',
    hrefTitle: 'hrefTitle'
  };
  beforeEach(() => {
    result = TestRenderer.create(
      <Card card={mockCard} />
    ).toTree();

  });

  it('renders correctly', () => {
    console.log(result);
    expect(result).toMatchSnapshot();
  });
});
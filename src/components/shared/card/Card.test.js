import React from 'react';
import Card from './Card';
import {MemoryRouter as Router} from 'react-router-dom';
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
      <Router>
        <Card card={mockCard} />
      </Router>
      
    ).toJSON();

  });

  it('renders correctly', () => {
    expect(result).toMatchSnapshot();
  });
});
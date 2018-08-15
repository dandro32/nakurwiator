import React from 'react';
import Dashboard from './Dashboard';
import TestRenderer from 'react-test-renderer';

jest.mock('../card/Card', () => 'Card component');

describe('Dashboard component test', () => {
  const mockCarsdData = [
    {
      title: 'Timeliny',
      desc: 'Sprawdź raporty w formie timelinów',
      href: '/raports/timeline',
      hrefTitle: 'Obczej',
      imgSrc: '/img/raports_timeline.jpg'
    }, 
    {
      title: 'Timeliny',
      desc: 'Sprawdź raporty w formie timelinów',
      href: '/raports/timeline',
      hrefTitle: 'Obczej',
      imgSrc: '/img/raports_timeline.jpg'
    }, 
  ];
  let renderedDashboard;
    
  beforeEach(() => {
    renderedDashboard = TestRenderer.create(
      <Dashboard cards={mockCarsdData}/>
    ).toJSON();
  });

  it('should render dashboard correctly', ()=> {
    expect(renderedDashboard).toMatchSnapshot();
  });

  it('should render dashboard cards exact count', ()=> {
    expect(renderedDashboard.children.length).toBe(2);
  });


});
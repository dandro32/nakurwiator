import React from 'react';
import Dashboard from '../shared/dashboard/Dashboard';

const Raports = () => {
  const cards = [
    {
      title: 'Timeliny',
      desc: 'Sprawdź raporty w formie timelinów',
      href: '/raports/timeline',
      hrefTitle: 'Obczej',
      imgSrc: '/img/raports_timeline.jpg'
    }
  ];
  return (<Dashboard cards={cards} />);
};

export default Raports;
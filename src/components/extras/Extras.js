import React from 'react';
import Dashboard from '../shared/dashboard/Dashboard';

const Extras = () => {
  const cards = [
    {
      title: 'Dodaj nowe białeczko',
      desc: 'Dodaj nową masóweczkę na buły',
      href: '/extras/proteins/new',
      hrefTitle: 'Dodej',
      imgSrc: '/img/proteins_new.jpg'
    },
    {
      title: 'Lista białeczek',
      desc: 'Zobacz jakie mosz białeczka, edytuj i usuwaj',
      href: '/extras/proteins/list',
      hrefTitle: 'Lista białeczek',
      imgSrc: '/img/proteins_list.jpg'
    }
  ];
  return (<Dashboard cards={cards} />);
};

export default Extras;
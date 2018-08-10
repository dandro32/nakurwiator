import React from 'react';
import Dashboard from '../shared/dashboard/Dashboard';

const Trainings = () => {
  const cards = [
    {
      title: 'Dodaj nowy trening',
      desc: 'Zaplanuj sobie nowy trening i sprawdź pompę',
      href: '/trainigns/new',
      hrefTitle: 'Dawej',
      imgSrc: '/img/training_new.jpg'
    },
    {
      title: 'Lista treningów',
      desc: 'Obczaj swoje treningi, edytuj lub usuwaj',
      href: '/trainigns/list',
      hrefTitle: 'Sprawdzam',
      imgSrc: '/img/training_list.jpg'
    }
  ];
  return (<Dashboard cards={cards} />);
};

export default Trainings;
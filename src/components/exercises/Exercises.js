import React from 'react';
import Dashboard from '../shared/dashboard/Dashboard';

const Exercises = () => {
  const cards = [
    {
      title: 'Dodaj nowe ćwiczenie',
      desc: 'Dodaj nowe ćwiczenie do atlasu ćwiczeń',
      href: '/exercises/new',
      hrefTitle: 'Dawej',
      imgSrc: '/img/exercises_new.jpg'
    },
    {
      title: 'Atlas ćwiczeń',
      desc: 'Zobacz jakie masz ćwiczenia, edytuj lub usuwaj',
      href: '/exercises/list',
      hrefTitle: 'To the atlas',
      imgSrc: '/img/exercises_list.jpg'
    }
  ];
  return (<Dashboard cards={cards} />);
};

export default Exercises;
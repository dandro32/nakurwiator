import React from 'react';
import Dashboard from '../UI/dashboard/Dashboard';

const Settings = () => {
  const cards = [
    {
      title: 'Ogólne',
      desc: 'Mieszej w konfiguracji tej apki',
      href: '/settings/general',
      hrefTitle: 'Mieszej se',
      imgSrc: '/img/settings_general.jpg'
    }
  ];
  return (<Dashboard cards={cards} />);
};

export default Settings;
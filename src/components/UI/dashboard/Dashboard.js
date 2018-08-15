import React from 'react';
import Card from '../card/Card.js';
import PropTypes from 'prop-types';

const Dashboard = ({cards}) => {
  const dashboardCards = cards.map((card, i) => {
    return <Card key={i} card={card} />;
  });

  return (
    <div className="row dashboard-containter justify-content-around align-items-center">
      {dashboardCards}
    </div>
  );
};

Dashboard.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      hrefTitle: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
    })
  )
};

export default Dashboard;
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Card = ({card}) => {
  return (
    <div className="card">
      <img className="card-img-top" src={card.imgSrc} />
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.desc}</p>
        <Link to={card.href} className="btn btn-primary">
          {card.hrefTitle}
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired
};

export default Card;
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Card = ({card}) => {
  const imageSrc = process.env.PUBLIC_URL+card.imgSrc; // eslint-disable-line no-undef
  return (
    <div className="card"> 
      <img className="card-img-top" src={imageSrc} alt={card.titile} /> 
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.desc}</p>
        <p className="text-center">
          <Link to={card.href} className="btn btn-primary">
            {card.hrefTitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired
};

export default Card;
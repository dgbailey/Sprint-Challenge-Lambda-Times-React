import React from 'react';
import '../../CSS/index.css';

const Card = ({passedCard}) => {
  return (
    <div className="card">
      <div className="headline">{passedCard.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={passedCard.img} />
        </div>
        <span>By {passedCard.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;

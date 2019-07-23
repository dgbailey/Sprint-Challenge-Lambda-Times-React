import React from 'react';
import '../../CSS/index.css';
import PropTypes from 'prop-types';

const Card = ({passedCard}) => {
  console.log('returning card JS');
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

Card.propTypes ={
  
  
  passedCard:
    PropTypes.objectOf(
      PropTypes.string
    
    )
  
}
// Make sure to include PropTypes.

export default Card;

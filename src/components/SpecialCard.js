import React from 'react';
import './SpecialCard.css';


function SpecialCard(props) {
  return (
    <article className="special-card">
      <div className="card-image-container">
        <img src={props.dish.image} alt={props.dish.name} className="card-image" />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3>{props.dish.name}</h3>
          <span className="dish-price">{props.dish.price}</span>
        </div>
        <p className="dish-description">
          {props.dish.description}
        </p>
        <button className="delivery-button">
          Order a Dilevery
        </button>
      </div>
    </article>
  );
}

export default SpecialCard;
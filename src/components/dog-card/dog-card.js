import React from 'react';
import './dog-card.css';

export default function DogCard(props) {
    return (
      <div className="card">
          <img src={props.image} alt={props.name} />
          <div className="info">
              <h3>{props.name}</h3>
              <p>{props.about}</p>
          </div>
      </div>
    )
}

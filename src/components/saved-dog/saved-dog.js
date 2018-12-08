import React from 'react';
import './saved-dog.css';

export default function SavedDog(props) {
    return (
        <div className="dog">
            <h5>{props.name}</h5>
            <img src={props.image} alt={props.name} />
        </div>
    );
};

SavedDog.defaultProps = {
    name: 'No saved dogs yet!',
    image: ''
}

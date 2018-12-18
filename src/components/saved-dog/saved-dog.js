import React from 'react';
import './saved-dog.css';

export default function SavedDog(props) {
    return (
        <div className="dog">
            <h5>{props.name}</h5>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <img src={props.image} alt={props.name} />
            </a>
        </div>
    );
};

SavedDog.defaultProps = {
    name: 'No saved dogs yet!',
    image: ''
}

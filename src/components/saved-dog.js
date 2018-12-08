import React from 'react';

export default function SavedDog(props) {
    return (
        <div>
            <h5>{props.name}</h5>
            <img src={props.image} alt={props.name} />
        </div>
    );
};

SavedDog.defaultProps = {
    name: 'No saved dogs yet!',
    image: ''
}

import React from 'react';
import './friend-search.css';
import DogCard from '../dog-card/dog-card';

const dogs = [
  {
    name: 'Carl',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lCw0jlf5A-EJwYWQ8yi0a8TyibY6Z4TvJ-pewFaG8A2AYJAmGw',
    age: 'Puppy',
    size: 'Large',
    link: 'www.aspca.org'
  },
  {
    name: 'Woof',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lCw0jlf5A-EJwYWQ8yi0a8TyibY6Z4TvJ-pewFaG8A2AYJAmGw',
    age: 'Mature',
    size: 'Small',
    link: 'www.aspca.org'
  },
  {
    name: 'Warf',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lCw0jlf5A-EJwYWQ8yi0a8TyibY6Z4TvJ-pewFaG8A2AYJAmGw',
    age: 'Elderly',
    size: 'Medium',
    link: 'www.aspca.org'
  },
  {
    name: 'Spock',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lCw0jlf5A-EJwYWQ8yi0a8TyibY6Z4TvJ-pewFaG8A2AYJAmGw',
    age: 'Puppy',
    size: 'Small',
    link: 'www.aspca.org'
  }
];

const dogCards = dogs.map((dog, index) =>
    <DogCard {...dog} />
);

export default class FriendSearch extends React.Component {
    render() {
      return(
        <div className="search-container">
            <h4>Find a new best friend!</h4>
            <div className="cards">
                {dogCards[0]}
            </div>
            <div className="buttons">
                <input
                  type="image"
                  src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png"
                  alt="Like button"
                  className="like"
                  onClick={(e) => e.preventDefault}
                />
                <input
                  type="image"
                  src="https://cdn3.iconfinder.com/data/icons/audio-sound-and-video/64/audio-video-outline-forward-512.png"
                  alt="Next button"
                  className="next"
                  onClick={(e) => e.preventDefault}
                />
            </div>
        </div>
      );
    }
}

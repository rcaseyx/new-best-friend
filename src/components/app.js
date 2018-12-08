import React from 'react';
import Profile from './profile/profile';

const savedDogs = [
  {
    name: 'Joe',
    image: 'https://www.petmd.com/sites/default/files/over-active-dog-211592482.jpg'
  },
  {
    name: 'Dave',
    image: 'https://www.petmd.com/sites/default/files/over-active-dog-211592482.jpg'
  },
  {
    name: 'Bob',
    image: 'https://www.petmd.com/sites/default/files/over-active-dog-211592482.jpg'
  }
];

const preferences = {
    age: 'any',
    size: 'any'
};

export default class App extends React.Component {
    render() {
      return (
        <Profile firstName="Test" savedDogs={savedDogs} preferences={preferences} />
      );
    }
}

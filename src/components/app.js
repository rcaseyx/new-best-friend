import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './home/home';
import Profile from './profile/profile';
import NavBar from './navbar/navbar';
import FriendSearch from './friend-search/friend-search';

const savedDogs = [
  {
    name: 'Joe',
    image: 'https://www.petmd.com/sites/default/files/over-active-dog-211592482.jpg'
  },
  {
    name: 'Gregs',
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

export default function App(props) {
    return (
      <Router>
          <div className="app">
              <main>
                  <Route path="/" component={NavBar} />
                  <Route exact path="/" component={Home} />
                  <Route
                    exact
                    path="/profile"
                    render={() => <Profile firstName="Test" savedDogs={savedDogs} preferences={preferences} />}
                  />
                  <Route exact path="/search" component={FriendSearch} />
              </main>
          </div>
      </Router>
    )
}

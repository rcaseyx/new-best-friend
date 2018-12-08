import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './home/home';
import Profile from './profile/profile';

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
                  <Route exact path="/" component={Home} />
                  <Route
                    exact
                    path="/profile"
                    render={() => <Profile firstName="Test" savedDogs={savedDogs} preferences={preferences} />}
                  />
              </main>
          </div>
      </Router>
    )
}

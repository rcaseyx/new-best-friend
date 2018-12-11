import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './home/home';
import Profile from './profile/profile';
import NavBar from './navbar/navbar';
import FriendSearch from './friend-search/friend-search';

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
                    component={Profile}
                  />
                  <Route exact path="/search" component={FriendSearch} />
              </main>
          </div>
      </Router>
    )
}

import React from 'react';
import {connect} from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './profile.css';

import PreferencesForm from '../preferences-form/preferences-form';
import SavedDog from '../saved-dog/saved-dog';

export class Profile extends React.Component {
    render() {
      if (!(this.props.loggedIn)) {
          return <Redirect to="/" />
      }
      if (this.props.savedDogs.length > 0) {
        const dogs = this.props.savedDogs.map((dog, index) =>
            <div key={index}>
                <SavedDog {...dog} />
            </div>
        );
        return (
          <div className="profile">
            <h3>{this.props.user.firstName}'s Profile</h3>
            <div className="saved-dogs-container">
              <h4>Saved Dogs</h4>
              <div className="saved-dogs">
                {dogs}
              </div>
            </div>
            <div className="preferences-container">
              <h4>Your Preferences</h4>
              <PreferencesForm age={this.props.preferences.age} size={this.props.preferences.size} />
            </div>
          </div>
        )
      } else {
        return (
          <div className="profile">
            <h3>{this.props.user.firstName}'s Profile</h3>
            <div className="saved-dogs-container">
              Visit <Link to="/search">Find a Friend</Link> to get started!
            </div>
            <div className="preferences-container">
              <h4>Your Preferences</h4>
              <PreferencesForm age={this.props.preferences.age} size={this.props.preferences.size} />
            </div>
          </div>
        )
      }
    }
}

Profile.defaultProps = {
    preferences: {
        age: 'any',
        size: 'any'
    }
};

const mapStateToProps = state => ({
    dogs: state.data.dogs,
    savedDogs: state.data.savedDogs,
    preferences: state.data.preferences,
    position: state.data.position,
    user: state.auth.currentUser,
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Profile);

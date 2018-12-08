import React from 'react';
import './profile.css';

import PreferencesForm from '../preferences-form/preferences-form';
import SavedDog from '../saved-dog/saved-dog';

export default class Profile extends React.Component {
    render() {
      const dogs = this.props.savedDogs.map((dog, index) =>
          <div key={index}>
              <SavedDog {...dog} />
          </div>
    );
      return (
        <div className="profile">
          <h3>{this.props.firstName}'s Profile</h3>
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
    }
}

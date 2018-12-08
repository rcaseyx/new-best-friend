import React from 'react';

import PreferencesForm from './preferences-form';
import SavedDog from './saved-dog';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName: 'Test',
          savedDogs: [
            {
              name: 'Jeff',
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
          ],
          preferences: []
        }
    }

    render() {
      const dogs = this.state.savedDogs.map((dog, index) =>
          <div key={index}>
              <SavedDog {...dog} />
          </div>
    );
      return (
        <div>
          <h3>{this.state.firstName}'s Profile</h3>
          <div>
            <h4>Saved Dogs</h4>
            <div>
              {dogs}
            </div>
          </div>
          <div>
            <h4>Your Preferences</h4>
            <PreferencesForm />
          </div>
        </div>
      )
    }
}

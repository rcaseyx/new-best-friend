import React from 'react';
import {connect} from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './profile.css';
import {fetchSavedDogs} from '../../actions/actions';

import PreferencesForm from '../preferences-form/preferences-form';
import SavedDog from '../saved-dog/saved-dog';

export class Profile extends React.Component {

    componentWillMount() {
      this.props.dispatch(fetchSavedDogs());
    }

    render() {
      if (!(this.props.loggedIn)) {
          return <Redirect to="/" />
      }
      if (this.props.savedDogObjs.length > 0) {
        const dogs = this.props.savedDogObjs.map((dog, index) =>
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
              <PreferencesForm />
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
              <PreferencesForm />
            </div>
          </div>
        )
      }
    }
}

const mapStateToProps = state => ({
    dogs: state.data.dogs,
    savedDogs: state.auth.currentUser.savedDogs,
    preferences: state.auth.currentUser.preferences,
    position: state.data.position,
    user: state.auth.currentUser,
    savedDogObjs: state.data.savedDogObjs,
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Profile);

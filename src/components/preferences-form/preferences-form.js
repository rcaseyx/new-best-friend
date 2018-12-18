import React from 'react';
import {connect} from 'react-redux';
import {updateAge, updateSize, updatePreferences} from '../../actions/users';
import {updateLocalUser} from '../../actions/users';
import Loader from 'react-loader-spinner';
import './preferences-form.css';

export class PreferencesForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkAgeSelection = this.checkAgeSelection.bind(this);
        this.checkSizeSelection = this.checkSizeSelection.bind(this);
    }

    updateAge(age) {
        this.props.dispatch(updateAge(age));
    }

    updateSize(size) {
        this.props.dispatch(updateSize(size));
    }

    updatePreferences(preferences) {
        this.props.dispatch(updatePreferences(preferences));
        this.props.dispatch(updateLocalUser());
    }

    handleSubmit(event) {
        event.preventDefault();
        this.updatePreferences(this.props.preferences);
    }

    handleAgeChange(event) {
        this.updateAge(event.target.value);
    }

    handleSizeChange(event) {
        this.updateSize(event.target.value);
    }

    checkAgeSelection(value) {
        if (this.props.preferences.age === value) {
            return true;
        } else {
            return false;
        }
    }

    checkSizeSelection(value) {
        if (this.props.preferences.size === value) {
            return true;
        } else {
            return false;
        }
    }

    render() {
      if (this.props.loading) {
          return (
              <Loader
                type="RevolvingDot"
                color="#D0DCE0"
                height="100"
                width="100"
              />
          )
      }
      return (
        <form onSubmit={this.handleSubmit}>
            <h4>Your Preferences</h4>
            <div className="radio-container">
                <div className="radio">
                    <p>Age</p>
                    <label
                      className={this.checkAgeSelection('puppy') ? "selection" : "base-label"}
                    >
                      <input
                        type="radio"
                        value="puppy"
                        checked={this.props.preferences.age === "puppy"}
                        onChange={this.handleAgeChange}
                      />
                      Puppy
                    </label>
                    <label
                      className={this.checkAgeSelection('mature') ? "selection" : "base-label"}
                    >
                      <input
                        type="radio"
                        value="mature"
                        checked={this.props.preferences.age === "mature"}
                        onChange={this.handleAgeChange}
                      />
                      Mature
                    </label>
                    <label
                      className={this.checkAgeSelection('elderly') ? "selection" : "base-label"}
                    >
                      <input
                        type="radio"
                        value="elderly"
                        checked={this.props.preferences.age === "elderly"}
                        onChange={this.handleAgeChange}
                      />
                      Elderly
                    </label>
                    <label
                      className={this.checkAgeSelection('any') ? "selection" : "base-label"}
                    >
                      <input
                        type="radio"
                        value="any"
                        checked={this.props.preferences.age === "any"}
                        onChange={this.handleAgeChange}
                      />
                      Any
                    </label>
                </div>
                <div className="radio">
                    <p>Size</p>
                    <label
                      className={this.checkSizeSelection('small') ? "selection" : "base-label"}
                    >
                      <input
                        type="radio"
                        value="small"
                        checked={this.props.preferences.size === "small"}
                        onChange={this.handleSizeChange}
                      />
                      Small
                    </label>
                    <label
                      className={this.checkSizeSelection('medium') ? "selection" : "base-label"}
                    >
                      <input
                        type="radio"
                        value="medium"
                        checked={this.props.preferences.size === "medium"}
                        onChange={this.handleSizeChange}
                      />
                      Medium
                    </label>
                    <label
                      className={this.checkSizeSelection('large') ? "selection" : "base-label"}
                    >
                      <input
                        type="radio"
                        value="large"
                        checked={this.props.preferences.size === "large"}
                        onChange={this.handleSizeChange}
                      />
                      Large
                    </label>
                    <label
                      className={this.checkSizeSelection('any') ? "selection" : "base-label"}
                    >
                      <input
                        type="radio"
                        value="any"
                        checked={this.props.preferences.size === "any"}
                        onChange={this.handleSizeChange}
                      />
                      Any
                    </label>
                </div>
            </div>
            <input
              type="submit"
              className="update-button"
              value="Update"
            />
        </form>
      )
    }
}

const mapStateToProps = state => ({
    preferences: state.auth.currentUser.preferences,
    loading: state.auth.loading
});

export default connect(mapStateToProps)(PreferencesForm);

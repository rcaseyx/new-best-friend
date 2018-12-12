import React from 'react';
import {connect} from 'react-redux';
import {updateAge, updateSize, updatePreferences} from '../../actions/actions';
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
      return (
        <form onSubmit={this.handleSubmit}>
            <div className="radio">
                Age Preference:
                <label
                  className={this.checkAgeSelection('puppy') ? "selection" : null}
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
                  className={this.checkAgeSelection('mature') ? "selection" : null}
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
                  className={this.checkAgeSelection('elderly') ? "selection" : null}
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
                  className={this.checkAgeSelection('any') ? "selection" : null}
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
                Size Preference:
                <label
                  className={this.checkSizeSelection('small') ? "selection" : null}
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
                  className={this.checkSizeSelection('medium') ? "selection" : null}
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
                  className={this.checkSizeSelection('large') ? "selection" : null}
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
                  className={this.checkSizeSelection('any') ? "selection" : null}
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
    dogs: state.data.dogs,
    savedDogs: state.data.savedDogs,
    preferences: state.data.preferences,
    position: state.data.position,
    user: state.auth.currentUser
});

export default connect(mapStateToProps)(PreferencesForm);

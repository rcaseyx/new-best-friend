import React from 'react';
import {connect} from 'react-redux';
import {updateAge, updateSize} from '../../actions';
import './preferences-form.css';

export class PreferencesForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
    }

    updateAge(age) {
        this.props.dispatch(updateAge(age));
    }

    updateSize(size) {
        this.props.dispatch(updateSize(size));
    }

    handleAgeChange(event) {
        this.updateAge(event.target.value);
    }

    handleSizeChange(event) {
        this.updateSize(event.target.value);
    }

    render() {
      return (
        <form>
            <div className="radio">
                Age Preference:
                <label>
                  <input
                    type="radio"
                    value="puppy"
                    checked={this.props.preferences.age === "puppy"}
                    onChange={this.handleAgeChange}
                  />
                  Puppy
                </label>
                <label>
                  <input
                    type="radio"
                    value="mature"
                    checked={this.props.preferences.age === "mature"}
                    onChange={this.handleAgeChange}
                  />
                  Mature
                </label>
                <label>
                  <input
                    type="radio"
                    value="elderly"
                    checked={this.props.preferences.age === "elderly"}
                    onChange={this.handleAgeChange}
                  />
                  Elderly
                </label>
                <label>
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
                <label>
                  <input
                    type="radio"
                    value="small"
                    checked={this.props.preferences.size === "small"}
                    onChange={this.handleSizeChange}
                  />
                  Small
                </label>
                <label>
                  <input
                    type="radio"
                    value="medium"
                    checked={this.props.preferences.size === "medium"}
                    onChange={this.handleSizeChange}
                  />
                  Medium
                </label>
                <label>
                  <input
                    type="radio"
                    value="large"
                    checked={this.props.preferences.size === "large"}
                    onChange={this.handleSizeChange}
                  />
                  Large
                </label>
                <label>
                  <input
                    type="radio"
                    value="any"
                    checked={this.props.preferences.size === "any"}
                    onChange={this.handleSizeChange}
                  />
                  Any
                </label>
            </div>
        </form>
      )
    }
}

const mapStateToProps = state => ({
    dogs: state.dogs,
    savedDogs: state.savedDogs,
    preferences: state.preferences,
    position: state.position,
    user: state.user
});

export default connect(mapStateToProps)(PreferencesForm);

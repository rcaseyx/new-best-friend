import React from 'react';
import './preferences-form.css';

export default class PreferencesForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
    }

    handleAgeChange(event) {
      this.setState({
        age: event.target.value
      });
    }

    handleSizeChange(event) {
      this.setState({
        size: event.target.value
      });
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
                    checked={this.props.age === "puppy"}
                    onChange={this.handleAgeChange}
                  />
                  Puppy
                </label>
                <label>
                  <input
                    type="radio"
                    value="mature"
                    checked={this.props.age === "mature"}
                    onChange={this.handleAgeChange}
                  />
                  Mature
                </label>
                <label>
                  <input
                    type="radio"
                    value="elderly"
                    checked={this.props.age === "elderly"}
                    onChange={this.handleAgeChange}
                  />
                  Elderly
                </label>
                <label>
                  <input
                    type="radio"
                    value="any"
                    checked={this.props.age === "any"}
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
                    checked={this.props.size === "small"}
                    onChange={this.handleSizeChange}
                  />
                  Small
                </label>
                <label>
                  <input
                    type="radio"
                    value="medium"
                    checked={this.props.size === "medium"}
                    onChange={this.handleSizeChange}
                  />
                  Medium
                </label>
                <label>
                  <input
                    type="radio"
                    value="large"
                    checked={this.props.size === "large"}
                    onChange={this.handleSizeChange}
                  />
                  Large
                </label>
                <label>
                  <input
                    type="radio"
                    value="any"
                    checked={this.props.size === "any"}
                    onChange={this.handleSizeChange}
                  />
                  Any
                </label>
            </div>
        </form>
      )
    }
}

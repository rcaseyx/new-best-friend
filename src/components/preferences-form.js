import React from 'react';

export default class PreferencesForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            age: 'any',
            size: 'any'
        }

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
          Age Preference:
          <label>
            <input
              type="radio"
              value="puppy"
              checked={this.state.age === "puppy"}
              onChange={this.handleAgeChange}
            />
            Puppy
          </label>
          <label>
            <input
              type="radio"
              value="mature"
              checked={this.state.age === "mature"}
              onChange={this.handleAgeChange}
            />
            Mature
          </label>
          <label>
            <input
              type="radio"
              value="elderly"
              checked={this.state.age === "elderly"}
              onChange={this.handleAgeChange}
            />
            Elderly
          </label>
          <label>
            <input
              type="radio"
              value="any"
              checked={this.state.age === "any"}
              onChange={this.handleAgeChange}
            />
            Any
          </label>

          Size Preference:
          <label>
            <input
              type="radio"
              value="small"
              checked={this.state.size === "small"}
              onChange={this.handleSizeChange}
            />
            Small
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              checked={this.state.size === "medium"}
              onChange={this.handleSizeChange}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              value="large"
              checked={this.state.size === "large"}
              onChange={this.handleSizeChange}
            />
            Large
          </label>
          <label>
            <input
              type="radio"
              value="any"
              checked={this.state.size === "any"}
              onChange={this.handleSizeChange}
            />
            Any
          </label>
        </form>
      )
    }
}

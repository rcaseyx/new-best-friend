import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {incrementPosition, resetPosition, fetchDogs} from '../../actions/actions';
import {addDog} from '../../actions/users';
import './friend-search.css';
import DogCard from '../dog-card/dog-card';

export class FriendSearch extends React.Component {
  constructor(props) {
      super(props);
      this.onLikeClick = this.onLikeClick.bind(this);
      this.onNextClick = this.onNextClick.bind(this);
  }

    componentWillMount() {
      this.resetPosition();
      const age = this.props.preferences.age;
      const size = this.props.preferences.size;
      this.props.dispatch(fetchDogs(age, size));
    }

    addDog(dog) {
      this.props.dispatch(addDog(dog));
    }

    incrementPosition() {
      this.props.dispatch(incrementPosition());
    }

    resetPosition() {
      this.props.dispatch(resetPosition());
    }

    onLikeClick() {
      this.addDog(this.props.dogs[this.props.position].id);
      this.incrementPosition();
    }

    onNextClick() {
      this.incrementPosition();
    }

    render() {
      if (!(this.props.loggedIn)) {
          return <Redirect to="/" />
      }
      if (this.props.position < this.props.dogs.length) {
        return (
          <div className="search-container">
              <h4>Find a new best friend!</h4>
              <div className="cards">
                <DogCard {...this.props.dogs[this.props.position]} />
              </div>
              <div className="buttons">
                  <input
                    type="image"
                    src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png"
                    alt="Like button"
                    className="like"
                    onClick={this.onLikeClick}
                  />
                  <input
                    type="image"
                    src="https://cdn3.iconfinder.com/data/icons/audio-sound-and-video/64/audio-video-outline-forward-512.png"
                    alt="Next button"
                    className="next"
                    onClick={this.onNextClick}
                  />
              </div>
          </div>
        );
      } else {
        return (
          <div className="search-container">
              <h4>Check back later for more friends!</h4>
          </div>
        );
      }
    }
}

FriendSearch.defaultProps = {
    position: 0
}

const mapStateToProps = state => ({
  dogs: state.data.dogs,
  savedDogs: state.auth.currentUser.savedDogs,
  preferences: state.auth.currentUser.preferences,
  position: state.data.position,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(FriendSearch);

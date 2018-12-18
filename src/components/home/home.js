import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import LoginForm from '../login-form/login-form';
import Loader from 'react-loader-spinner';
import './home.css';

export class Home extends React.Component {
    render() {
        let loginForm;
        if (!(this.props.loggedIn)) {
            loginForm = (
              <div className="login-container">
                  <LoginForm />
                  Don't have an account? <Link to="/signup">Sign up</Link>.
              </div>
            );
        }
        if (this.props.loading) {
          return (
              <div className="home">
                  <Loader
                    type="RevolvingDot"
                    color="#D0DCE0"
                    height="100"
                    width="100"
                  />
              </div>
          )
        }
        return (
          <div className="home">
              <div className="about">
                  <p>New Best Friend allows users to view available rescue
                  dogs for adoption. Users can set preferences on size and age
                  in their profile, then view dogs based on those preferences.</p>
                  <a
                    href="https://www.rocketdogrescue.org/learn/why-rescue/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Why rescue?
                  </a>
                  <a
                    href="http://athenscaninerescue.com/adoption-procedures/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn about adoption procedures.
                  </a>
              </div>
              {loginForm}
          </div>
        );
    }
}

const mapStateToProps = state => ({
      loggedIn: state.auth.currentUser !== null,
      loading: state.auth.loading
});

export default connect(mapStateToProps)(Home);

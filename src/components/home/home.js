import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import LoginForm from '../login-form/login-form';
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
        return (
          <div className="home">
              <div className="about">
                  <p>New Best Friend allows users to view available rescue
                  dogs for adoption. Dogs are shown based on preferences
                  set by the user. More info later.</p>
              </div>
              {loginForm}
          </div>
        );
    }
}

const mapStateToProps = state => ({
      loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Home);

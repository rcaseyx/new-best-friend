import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Loader from 'react-loader-spinner';

import SignupForm from '../signup-form/signup-form';
import './signup-page.css';

export function SignupPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/profile" />;
    }
    if (props.loading) {
        return (
            <div className="signup-page">
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
        <div className="signup-page">
            <h2>Sign up for New Best Friend</h2>
            <SignupForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    loading: state.auth.loading
});

export default connect(mapStateToProps)(SignupPage);

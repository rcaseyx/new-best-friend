import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import SignupForm from '../signup-form/signup-form';

export function SignupPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/profile" />;
    }
    return (
        <div className="signup-page">
            <h2>Sign up for New Best Friend</h2>
            <SignupForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignupPage);

import React from 'react';
import LoginForm from './login-form';
import SignupForm from './signup-form';


export class GetStarted extends React.Component {

  render() {
    return (
      <div className="get-started">
          <h2>New Best Friend</h2>
          <p>Login to find your new best friend!</p>
          <LoginForm />
          <p>Don't have an account? Sign up below!</p>
          <SignupForm />
      </div>
    )
  }
}

export default GetStarted;

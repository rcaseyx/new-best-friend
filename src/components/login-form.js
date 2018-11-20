import React from 'react';

export default class LoginForm extends React.Component {
    render() {
      return (
        <form className="login-form" onSubmit={console.log('submitted')}>
            <fieldset>
                <legend>Login</legend>
                <label for="uname">Username:
                  <input type="text" id="uname" placeholder="demo.user" ref={input => this.uname = input} required />
                </label>
                <label for="password">Password:
                  <input type="password" id="password"  placeholder="demouser" ref={input => this.pword = input} required />
                </label>
                <input type="submit" class="submit-login button" />
            </fieldset>
        </form>
      )
    }
}

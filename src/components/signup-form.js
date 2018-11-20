import React from 'react';

export default class SignupForm extends React.Component {
    render() {
      return (
        <form class="sign-up-form">
            <fieldset>
                <legend>Create Account</legend>
                <label for="uname-su">User Name:
                  <input type="text" id="uname-su" required />
                </label>
                <label for="password-su">Password:
                  <input type="password" id="password-su" required />
                </label>
                <label for="firstName">First Name:
                  <input type="text" id="firstName" />
                </label>
                <label for="lastName">Last Name:
                  <input type="text" id="lastName" />
                </label>
                <input type="submit" class="submit-create-account button" />
            </fieldset>
        </form>
      )
    }
}

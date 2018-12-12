import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {signupUser} from '../../actions/users';
import {login} from '../../actions/auth';
import Input from '../input/input';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class SignupForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName} = values;
        const user = {username, password, firstName};
        return this.props
            .dispatch(signupUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form
                className="login"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="confirmPassword"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <label htmlFor="firstName">First Name</label>
                <Field
                    component={Input}
                    type="text"
                    name="firstName"
                    validate={[required, nonEmpty]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Sign Up
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signup',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('signup', Object.keys(errors)[0]))
})(SignupForm);

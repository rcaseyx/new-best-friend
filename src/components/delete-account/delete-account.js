import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth';
import {deleteAccount} from '../../actions/users';
import {clearAuthToken, clearCurrentUser} from '../../local-storage';
import './delete-account.css';


export class DeleteAccount extends React.Component {
    constructor(props) {
        super(props);
        this.onConfirmClick = this.onConfirmClick.bind(this);
    }

    onConfirmClick() {
      this.props.dispatch(deleteAccount());
      this.props.dispatch(clearAuth());
      clearAuthToken();
      clearCurrentUser();
    }
    render() {
        if (!(this.props.loggedIn)) {
            return <Redirect to="/" />
        }

        return (
            <div className="delete-account">
                Are you sure you want to delete your account?
                This action cannot be undone.
                <div className="delete-buttons">
                    <button onClick={this.onConfirmClick}>Confirm</button>
                    <Link to="/profile">
                        <button>Cancel</button>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(DeleteAccount);

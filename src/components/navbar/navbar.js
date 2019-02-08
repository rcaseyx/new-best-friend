import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken, clearCurrentUser} from '../../local-storage';
import './navbar.css';

export class NavBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
        clearCurrentUser();
    }

    render() {
        let logOutLink;
        let profileLink;
        let findFriendLink;
        if (this.props.loggedIn) {
            logOutLink = (
              <li>
                  <Link to="/" onClick={() => this.logOut()}>
                    Log Out
                  </Link>
              </li>
            );
            profileLink = (
              <li>
                  <Link to="/profile">
                    Profile
                  </Link>
              </li>
            );
            findFriendLink = (
              <li>
                  <Link to="/search">
                    Find a Friend
                  </Link>
              </li>
            );
        }
        return (
            <nav role="navigation">
                <ul className="nav-links">
                    <li>
                        <Link to="/">
                          New Best Friend
                        </Link>
                    </li>
                    {logOutLink}
                    {findFriendLink}
                    {profileLink}
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
      loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);

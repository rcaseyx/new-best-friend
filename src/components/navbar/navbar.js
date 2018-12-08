import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function NavBar(props) {
    return (
        <nav role="navigation">
            <ul className="nav-links">
                <li>
                    <Link to="/profile">
                      Profile
                    </Link>
                </li>
                <li>
                    <Link to="/search">
                      Find a Friend
                    </Link>
                </li>
                <li>
                    <Link to="/">
                      New Best Friend
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

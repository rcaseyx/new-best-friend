import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home(props) {
    return (
      <div className="home">
          <div className="about">
              <p>New Best Friend allows users to view available rescue
              dogs for adoption. Dogs are shown based on preferences
              set by the user. More info later.</p>
          </div>
          <div className="links">
              <Link to="/profile"><button>View Profile</button></Link>
          </div>
      </div>
    );
}

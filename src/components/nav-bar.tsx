import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/logo';
import './nav-bar.css'

const NavBar: FunctionComponent = () => {
  return (
    <div className="nav-wrapper teal lighten-3 content-css-nav-bar">
      <div className="logo-container">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <Link to="#" className='color-style-link'>MyPokemons</Link>
      <Link to="#" className='color-style-link'>MyBadges</Link>
      <Link to="#" className='color-style-link'>MyProfile</Link>
    </div>
  );
}

export default NavBar;




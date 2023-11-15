import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/logo';
import './nav-bar.css'

const NavBar: FunctionComponent = () => {
  return (
    <div className="nav-wrapper teal lighten-4 content-css-nav-bar">
      <Link to="/" className="brand-logo">
        <Logo />
      </Link>
      <div className='justify-content-items'>
        <div>MyPokemons</div>
        <div>MyBadges</div>
        <div>MyProfile</div>
      </div>
    </div>
  );
}

export default NavBar;




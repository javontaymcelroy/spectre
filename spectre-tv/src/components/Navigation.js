import React from 'react';

import './Navigation.css';
import Search from './Search';

const Navigation = () => {
  return (
    <div className='nav-bar'>
      <a href='/'>
        <img
          src={require(`../assets/spectre_logo.png`)}
          alt='spectre'
          className='logo'
        />
      </a>
      <Search />
    </div>
  );
};

export default Navigation;

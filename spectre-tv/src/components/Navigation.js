import React from 'react';

import './Navigation.css';
import Search from './Search';

const Navigation = () => {
  return (
    <div className='nav-bar'>
      <h1>Spectre</h1>
      <Search />
    </div>
  );
};

export default Navigation;

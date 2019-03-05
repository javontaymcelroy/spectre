import React from 'react';
import './Navigation.css';

const Navigation = ({ submitSearch, searchChangeHandler }) => {
  return (
    <div className='nav-bar'>
      <h1>Spectre</h1>
      <form onSubmit={submitSearch}>
        <input
          className='search'
          placeholder='⌕'
          type='text'
          onChange={searchChangeHandler}
        />
      </form>
    </div>
  );
};

export default Navigation;

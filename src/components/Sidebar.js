import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ genres }) => {
  return (
    <>
      {/* <div className='mobile'>
        <h1 className='mobile-nav'>Genres ▼</h1>
        <h1 className='mobile-logo'>SPETCRE</h1>
      </div> */}
      <div className='side-bar'>
        <NavLink to='/' className='links-logo'>
          SPECTRE
        </NavLink>

        {genres.map(genre => {
          if (genre.name === 'Action & Adventure') {
            genre.name = 'Action';
          } else if (genre.name === 'Sci-Fi & Fantasy') {
            genre.name = 'Sci-Fi';
          } else if (genre.name === 'War & Politics') {
            genre.name = 'History';
          }

          return (
            <NavLink
              key={genre.id}
              to={`/genres/${genre.name}`}
              className='links'
              activeClassName='is-active'
            >
              {genre.name}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;

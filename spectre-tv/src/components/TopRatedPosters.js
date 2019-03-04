import React from 'react';
import { NavLink } from 'react-router-dom';
import './Posters.css';

const TopRatedPosters = ({ rated }) => {
  return (
    <div className='poster-container-nohero'>
      {rated.map(rated => (
        <div key={rated.id}>
          <NavLink to={`/TvShow/${rated.id}`} className='title-links'>
            <img
              src={`http://image.tmdb.org/t/p/w500${rated.poster_path}`}
              alt={rated.name}
              className='posters'
            />
            <h3 className='poster-title'> {rated.name} </h3>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default TopRatedPosters;

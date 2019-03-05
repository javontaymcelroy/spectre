import React from 'react';
import { NavLink } from 'react-router-dom';
import './Posters.css';

const PopularPosters = ({ popular, addDefaultSrc }) => {
  return (
    <div className='poster-container'>
      {popular.map(popular => (
        <div key={popular.id}>
          <NavLink to={`/TvShow/${popular.id}`} className='title-links'>
            <img
              src={`http://image.tmdb.org/t/p/w500${popular.poster_path}`}
              alt={popular.name}
              className='posters'
              onError={addDefaultSrc}
            />
            <h3 className='poster-title'> {popular.name} </h3>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default PopularPosters;

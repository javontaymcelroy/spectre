import React from 'react';
import { NavLink } from 'react-router-dom';
import './Posters.css';

const SimilarShowsPosters = ({ similarShows, addDefaultSrcPoster }) => {
  return (
    <div className='poster-container-nohero'>
      {similarShows.map(similarShows => (
        <div key={similarShows.id}>
          <NavLink
            to={`/TvShow/${similarShows.id}`}
            className='title-links'
            value='Refresh Page'
            onClick='window.location.reload()'
          >
            <img
              src={`http://image.tmdb.org/t/p/w500${similarShows.poster_path}`}
              alt={similarShows.name}
              className='posters'
              onError={addDefaultSrcPoster}
            />
            <h3 className='poster-title'> {similarShows.name} </h3>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default SimilarShowsPosters;

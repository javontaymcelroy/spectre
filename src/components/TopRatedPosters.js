import React from 'react';
import { NavLink } from 'react-router-dom';
import './Posters.css';

const TopRatedPosters = React.forwardRef(
  ({ rated, addDefaultSrc, onWheel }, ref) => (
    <div
      className='poster-container-nohero scroller'
      ref={ref}
      onWheel={onWheel}
    >
      {rated.map(rated => (
        <div key={rated.id}>
          <NavLink to={`/tvshow/${rated.id}`} className='title-links'>
            <img
              src={`http://image.tmdb.org/t/p/w500${rated.poster_path}`}
              alt={rated.name}
              className='posters'
              onError={addDefaultSrc}
            />
            <h3 className='poster-title'> {rated.name} </h3>
          </NavLink>
        </div>
      ))}
    </div>
  )
);

export default TopRatedPosters;

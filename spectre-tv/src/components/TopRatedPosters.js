import React from 'react';
import './Posters.css';

const TopRatedPosters = ({ rated }) => {
  return (
    <div className='poster-container-nohero'>
      {rated.map(rated => (
        <>
          <div>
            <img
              src={`http://image.tmdb.org/t/p/w500${rated.poster_path}`}
              alt={rated.name}
              className='posters'
            />
            <h3 className='poster-title'> {rated.name} </h3>
          </div>
        </>
      ))}
    </div>
  );
};

export default TopRatedPosters;

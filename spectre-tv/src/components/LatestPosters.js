import React from 'react';
import './Posters.css';

const LatestPosters = ({ shows }) => {
  return (
    <div className='poster-container'>
      {shows.map(shows => (
        <>
          <div>
            <img
              src={`http://image.tmdb.org/t/p/w500${shows.poster_path}`}
              alt={shows.name}
              className='posters'
            />
            <h3 className='poster-title'> {shows.name} </h3>
          </div>
        </>
      ))}
    </div>
  );
};

export default LatestPosters;

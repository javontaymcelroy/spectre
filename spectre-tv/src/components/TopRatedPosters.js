import React from 'react';
import './MainPosters.css';

const TopRatedPosters = ({ topRated }) => {
  return (
    <div className='poster-container'>
      {topRated.map(topRated => (
        <>
          <div>
            <img
              src={`http://image.tmdb.org/t/p/w500${topRated.poster_path}`}
              alt={topRated.name}
              className='posters'
            />
            <h3 className='poster-title'> {topRated.name} </h3>
          </div>
        </>
      ))}
    </div>
  );
};

export default TopRatedPosters;

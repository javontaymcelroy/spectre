import React from 'react';
import './Posters.css';

const PopularPosters = ({ popular }) => {
  return (
    <div className='poster-container'>
      {popular.map(popular => (
        <>
          <div>
            <img
              src={`http://image.tmdb.org/t/p/w500${popular.poster_path}`}
              alt={popular.name}
              className='posters'
            />
            <h3 className='poster-title'> {popular.name} </h3>
          </div>
        </>
      ))}
    </div>
  );
};

export default PopularPosters;

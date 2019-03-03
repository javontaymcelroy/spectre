import React from 'react';
import './Home.css';
import LatestPosters from './LatestPosters';

const Home = ({ shows }) => {
  return (
    <div className='home-container'>
      <h1 className='headers'>
        <mark>Latest</mark>TV Shows
      </h1>
      <div className='home-display'>
        <div className='hero-content'>
          <div className='hero-info'>
            <h3 className='hero-title'>{shows[0].name}</h3>
            <p className='hero-overview'>{shows[0].overview}</p>
          </div>
          <img
            className='big-poster'
            src={'http://image.tmdb.org/t/p/original' + shows[0].backdrop_path}
            alt={shows.name}
          />
        </div>
        <LatestPosters shows={shows} />
      </div>
    </div>
  );
};

export default Home;

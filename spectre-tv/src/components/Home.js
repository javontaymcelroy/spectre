import React from 'react';
import './Home.css';
import PopularPosters from './PopularPosters';

const Home = ({ popular }) => {
  return (
    <>
      <div className='popular-container'>
        <h1 className='headers'>
          <mark>Popular</mark>TV Shows
        </h1>
        <div className='home-display'>
          <div className='hero-content'>
            <div className='hero-info'>
              <h3 className='hero-title'>{popular[0].name}</h3>
              <p className='hero-overview'>{popular[0].overview}</p>
            </div>
            <img
              className='big-poster'
              src={
                'http://image.tmdb.org/t/p/original' + popular[0].backdrop_path
              }
              alt={popular.name}
            />
          </div>
          <PopularPosters popular={popular} />
        </div>
      </div>
    </>
  );
};

export default Home;

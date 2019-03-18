// ------------DEPENDANCIES ----------------------//
import React from 'react';
import { NavLink } from 'react-router-dom';
// ------------STYLES ----------------------//
import './Home.css';
// ------------COMPONENTS----------------------//
import PopularPosters from './PopularPosters';
import TopRatedPosters from './TopRatedPosters';
// ------------FUNCTIONAL COMPONENT ----------------------//

const Home = ({ popular, rated, addDefaultSrc }) => {
  const parent = { width: `82%`, height: `495px` };
  const parentNoHero = { width: `100%`, height: `495px` };

  return (
    <>
      <div className='popular-container' style={parent}>
        <h1 className='headers'>
          <mark>Popular</mark>TV Shows
        </h1>
        <div className='home-display'>
          <div className='hero-content'>
            <div className='hero-info'>
              <h3 className='hero-title'>
                {popular && popular.length > 0 ? popular[0].name : ''}
              </h3>
              <p className='hero-overview'>
                {popular && popular.length > 0 ? popular[0].overview : ''}
              </p>
            </div>
            <NavLink to={`/TvShow/${popular[0].id}`}>
              <img
                className='big-poster'
                src={
                  popular && popular.length > 0
                    ? 'http://image.tmdb.org/t/p/original' +
                      popular[0].backdrop_path
                    : ''
                }
                alt={popular.name}
              />
            </NavLink>
          </div>
          <PopularPosters
            popular={popular}
            addDefaultSrc={addDefaultSrc}
            className='popular'
          />
        </div>
        <div className='toprated-container' style={parentNoHero}>
          <h1 className='headers'>
            <mark>Top</mark>Rated
          </h1>
          <TopRatedPosters rated={rated} />
        </div>
      </div>
    </>
  );
};

export default Home;

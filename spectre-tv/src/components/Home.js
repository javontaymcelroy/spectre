import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import './Home.css';
import PopularPosters from './PopularPosters';
import TopRatedPosters from './TopRatedPosters';

const Home = ({ popular, rated }) => {
  const parent = { width: `82%`, height: `485px` };
  const parentNoHero = { width: `100%`, height: `485px` };
  return (
    <>
      <div className='popular-container' style={parent}>
        <h1 className='headers'>
          <mark>Popular</mark>TV Shows
        </h1>
        <HorizontalScroll
          reverseScroll='[true]'
          config={{ stiffness: 100, damping: 20 }}
        >
          <div className='home-display'>
            <div className='hero-content'>
              <div className='hero-info'>
                <h3 className='hero-title'>{popular[0].name}</h3>
                <p className='hero-overview'>{popular[0].overview}</p>
              </div>
              <img
                className='big-poster'
                src={
                  'http://image.tmdb.org/t/p/original' +
                  popular[0].backdrop_path
                }
                alt={popular.name}
              />
            </div>
            <PopularPosters popular={popular} />
          </div>
        </HorizontalScroll>
        <div className='toprated-container' style={parentNoHero}>
          <h1 className='headers'>
            <mark>Top</mark>Rated
          </h1>
          <HorizontalScroll
            reverseScroll='[true]'
            config={{ stiffness: 100, damping: 20 }}
          >
            <TopRatedPosters rated={rated} />
          </HorizontalScroll>
        </div>
      </div>
    </>
  );
};

export default Home;

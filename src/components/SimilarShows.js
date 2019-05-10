import React from 'react';
import { Link } from 'react-router-dom';
import './Posters.css';

const SimilarShowsPosters = React.forwardRef(
  ({ similarShows, addDefaultSrcPoster, wheel }, ref) => (
    <div className='poster-container-nohero scroller' ref={ref} onWheel={wheel}>
      {similarShows.map(similarShows => (
        <div key={similarShows.id}>
          <Link
            to={`/TvShow/${similarShows.id}`}
            className='title-links'
            onClick='widow.location.reload();'
          >
            <img
              src={`http://image.tmdb.org/t/p/w500${similarShows.poster_path}`}
              alt={similarShows.name}
              className='posters'
              onError={addDefaultSrcPoster}
              draggable='false'
            />
            <h3 className='poster-title'> {similarShows.name} </h3>
          </Link>
        </div>
      ))}
    </div>
  )
);

export default SimilarShowsPosters;

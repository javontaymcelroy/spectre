import React from 'react';
import { NavLink } from 'react-router-dom';
import './Posters.css';

const PopularPosters = React.forwardRef(
  ({ popular, addDefaultSrc, onWheel }, popref) => (
    <div className='poster-container scroller' ref={popref} onWheel={onWheel}>
      {popular.map(popular => (
        <div key={popular.id}>
          <NavLink to={`/tvshow/${popular.id}/1`} className='title-links'>
            <img
              src={`http://image.tmdb.org/t/p/w500${popular.poster_path}`}
              alt={popular.name}
              className='posters'
              onError={addDefaultSrc}
            />
            <h3 className='poster-title'> {popular.name} </h3>
          </NavLink>
        </div>
      ))}
    </div>
  )
);

export default PopularPosters;

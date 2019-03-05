import React from 'react';
import ReactPlayer from 'react-player';
import './TvShow.css';

const Extras = ({ extras }) => {
  return (
    <div className='extras-videos'>
      {extras.map((extra, index) => {
        if (index < 3) {
          return (
            <ReactPlayer
              url={`https://www.youtube.com/embed/${extra.key}`}
              className='extra-video'
              width='400px'
              height='225px'
              pip={true}
              controls={true}
              loop={true}
            />
          );
        } else return '';
      })}
    </div>
  );
};

export default Extras;

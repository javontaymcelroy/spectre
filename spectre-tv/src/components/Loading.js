import React from 'react';
import { PongSpinner } from 'react-spinners-kit';
import './Loading.css';

const Loading = () => {
  return (
    <div className='loading'>
      <PongSpinner size={80} color='#16ff83' loading='true' />
    </div>
  );
};

export default Loading;

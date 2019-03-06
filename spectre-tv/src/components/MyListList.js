import React from 'react';

const MyListList = props => {
  const sortedList = props.MyListArray.sort((a, b) => a.added - b.added);
  return (
    <div className='my-list-posters'>
      <p>This is a movie</p>
    </div>
  );
};

export default MyListList;

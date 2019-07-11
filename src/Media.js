import React from 'react';

const Media = props => {
  return (
    <div className='media'>
      <h1>NASA Photo of the Day: {props.title ? props.title : 'Loading...'}</h1>
      <embed className='media-img' src={props.hdurl} />
    </div>
  );
};

export default Media;
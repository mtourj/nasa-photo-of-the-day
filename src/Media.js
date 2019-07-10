import React from 'react';

const Media = props => {
  return (
    <div className='media'>
      <h1>{props.title}</h1>
      <embed src={props.url} />
    </div>
  );
};

export default Media;
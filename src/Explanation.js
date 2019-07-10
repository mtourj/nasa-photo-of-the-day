import React, { useState } from 'react';

const Explanation = props => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  }

  return (
    <div className='explanation'>
      <button onClick={toggleOpen}>Show/Hide explanation</button>
      {
        isOpen ? props.explanation : null
      }
    </div>
  );
};

export default Explanation;
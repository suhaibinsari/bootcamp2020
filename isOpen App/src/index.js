import React from 'react';
import  { useState } from 'react';

function useToggle({ spoilerText }) {
  // useToggle doesn't exist yet, but what if it did?
  const [isVisible, toggleVisible] = useToggle(false);

  return (
    <div>
      <button onClick={toggleVisible}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <span>{spoilerText}</span>}
    </div>
  );
}
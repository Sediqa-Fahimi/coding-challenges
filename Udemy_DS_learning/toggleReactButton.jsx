import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Toggle() {
  const [state, toggleState] = useState('ON');
  function handleClick() {
    state === 'ON' ? toggleState('OFF') : toggleState('ON');
  }
  
  return (
    <button
    onClick={handleClick}
    >{state}</button>
  );
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
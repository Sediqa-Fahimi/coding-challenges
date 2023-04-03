
import './App.css';
import {useState, useEffect, useReducer} from 'react';

function App() {
  const [state, setState] = useReducer(
    (state)=> state === "ON" ? "OFF" : "ON"
    ,"ON");

  useEffect(()=> {
    console.log(`I am ${state === "ON" ? "OFF" : "ON"}.`)
  },[state]);

  
  return (
    <div className="App">
      <h1>Turn me {state}</h1>
      <button onClick={setState}>{state}</button>
    </div>
  );
}

export default App;

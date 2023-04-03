
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [state, setState] = useState("ON");

  useEffect(()=> {
    console.log(`I am ${state}.`)
  },[state]);

  const handleClick = () =>{
    state === "ON" ? setState("OFF") : setState("ON");
  }
  return (
    <div className="App">
      <h1>Turn me {state}</h1>
      <button onClick={handleClick}>{state}</button>
    </div>
  );
}

export default App;

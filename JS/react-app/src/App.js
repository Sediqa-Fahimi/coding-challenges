
import './App.css';
import {useState} from 'react';

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const titleChange = (e) =>{
    setTitle(e.target.value);
    console.log(title)
  }
  const colorChange = (e) =>{
    setColor(e.target.value);
  }
  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("#000000");
  }
  return (
    <form onSubmit={submit}>
      <input 
      value={title}
      type="text" 
      placeholder="color title"
      onChange={titleChange}
      />
      <input
      value={color}
      type="color"
      onChange={colorChange}
      />
      <input type="submit" value="Add"/>
    </form>
  );
}

export default App;


import './App.css';
import {useRef} from 'react';

function App() {
  const textTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = textTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    textTitle.current.value = "";
    hexColor.current.value = "";
  }
  return (
    <form onSubmit={submit}>
      <input 
      ref={textTitle}
      type="text" 
      placeholder="color title"
      />
      <input
      ref={hexColor}
      type="color"
      />
      <input type="submit" value="Add"/>
    </form>
  );
}

export default App;

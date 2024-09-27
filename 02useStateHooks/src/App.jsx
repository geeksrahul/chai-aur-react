import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount] = useState(0);
  function handleClick() {
    count++;
    setCount(count); // replicate change in component anywhere
    console.log(count);
  }
  return (
    <>
      <button onClick={handleClick} style={{border:`${count}px solid red`,outline:'none'}} >
        {count}
      </button>
    </>
  ) 
}

export default App

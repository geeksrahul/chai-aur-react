import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // state-managament (changing variable values ❌ for propogating changes)
  // standard convention of writing hooks [react is library so you can done by yourself whatever you want] 
  const [counter, setCounter] = useState(0);
  const add = ()=>{
    if(counter === 10) {
      return;
    }
    setCounter(counter + 1)
  }
  const remove = ()=> {
    if(counter ===0 ){
      return;
    }
    setCounter(counter - 1)
  }
  return (
    <>
      <h1> Couter App</h1>
      <h2> Current Value : {counter} </h2>
      <button onClick={add}> add {counter} </button>
      <button onClick={remove}> remove {counter} </button>
    </>
  )
}

export default App

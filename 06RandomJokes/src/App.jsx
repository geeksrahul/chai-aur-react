import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [setup, setSetup ] = useState("");
  const [punchline, setPunchline ] = useState("");
  
  const generateJoke = () => {
    axios.get("https://official-joke-api.appspot.com/random_joke")
    .then((response)=>{
      setSetup(response.data.setup);  
      setPunchline(response.data.punchline);
    }) 
  }

  useEffect(()=>{
    generateJoke();
  }, []);

  return(
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='bg-gray-400 w-1/3 rounded-lg p-2 flex items-center justify-center flex-col gap-3'>
        <h1 className='text-2xl font-bold text-center underline'> Joke Generator </h1> 
        <div className=''> Que - {setup  || ""} </div>
        <div className=''> Ans - {punchline || ""} </div>
        <button 
          className='text-white bg-purple-700 px-5 py-2 rounded-lg cursor-pointer'
          onClick={generateJoke}
        > Generate Jokes </button>
      </div>
    </div>
  )
}

export default App

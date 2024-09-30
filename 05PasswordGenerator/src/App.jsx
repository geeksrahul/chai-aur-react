import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [password, setPassword] = useState();
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);

  const inputPassword = useRef(null);

  // optimize
  const passwordGenerator = useCallback(()=>{
    let password = "";
    let alphabates = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numbers = "0123456789"
    let symbols = "!@#$%^&*()_+"
    let string = alphabates;
    if(numberAllowed) {
      string += numbers;
    }
    if(symbolAllowed) {
      string += symbols;
    }
    for(let i=0; i<length; i++) {
      password += string.charAt(Math.floor(Math.random() * string.length));
    }
    setPassword(password);
  }, [length, numberAllowed, symbolAllowed, setPassword]);

  //run
  useEffect(()=>{
    passwordGenerator();
  },[length, numberAllowed, symbolAllowed, passwordGenerator]);

  const copyPassword = ()=> {
    navigator.clipboard.writeText(password);
    inputPassword.current?.select();
    inputPassword.current?.setSelectionRange(0,16);
    console.log(inputPassword);
  }

  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className="container text-white flex flex-col justify-center items-center gap-2 bg-gray-600 w-1/3 p-2 rounded">
        <h1 className='text-white text-3xl text-center'> Password Generator</h1>
        <div className="output">
          <input 
            type="text" 
            name="password" 
            id="password" 
            className='p-2 text-black'
            value={password}
            ref={inputPassword}
            readOnly
          />
          <button 
            className='bg-blue-700 p-2'
            onClick={copyPassword}
          >  COPY </button>
        </div>
        <div className="control">
          <input 
            type="range" 
            name="" 
            id="length"
            min={8} 
            max={16}
            value={length}
            onChange={(e)=>{
              setLength(e.target.value);
            }}
          />
          <label htmlFor="length">Length ({length})</label>

          <input 
            type="checkbox" 
            name="numbers" 
            id="numbers"
            defaultChecked={numberAllowed}
            onChange={()=>{
              setNumberAllowed(prev => !prev);
            }}
           />
          <label htmlFor="numbers">Number</label>

          <input 
            type="checkbox" 
            name="symbols" 
            id="symbols"
            defaultChecked={numberAllowed}
            onChange={()=>{
              setSymbolAllowed(prev => !prev);
            }}
           />
          <label htmlFor="symbols">Symbol</label>
        </div>
      </div>
    </div>
  )
}

export default App

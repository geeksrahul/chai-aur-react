import { useState } from 'react'
import { Person } from './components'

function App() {
  const [count, setCount] = useState(0)

  {/* <Person name='rahul' city={'mahuva'} age={19} subject={[17,22,33]} result={{per:87,grade:'a+'}} /> */}
  return (
    <>
      <Person data={{name:'Rahul Baraiya', job:'programmer', city:'mahuva'}}/>
      <Person data={{name:'Vishwa Goswami', job:'programmer', city:'rajkot'}}/>
    </>
  )
}

export default App

import { useState } from 'react'
import BgBtn from './BgBtn'
function App() {
  const [color, setColor] = useState("red");
  // return (
  //   <div className="w-full h-screen flex justify-center p-10" style={{backgroundColor:color}}>
  //     <div className="fixed bottom-10 flex justify-around items-center bg-white p-1 rounded-md gap-1">
  //       <BgBtn id="blue" foreColor="white" backColor="blue" setColor={setColor} />
  //       <BgBtn id="red" foreColor="white" backColor="red" setColor={setColor} />
  //       <BgBtn id="yellow" foreColor="black" backColor="yellow" setColor={setColor} />
  //       <BgBtn id="aqua" foreColor="black" backColor="aqua" setColor={setColor} />
  //       <BgBtn id="pink" foreColor="black" backColor="pink" setColor={setColor} />
  //       <BgBtn id="purple" foreColor="white" backColor="purple" setColor={setColor} />
  //     </div>
  //   </div>
  // )
  return (
    <>
      <div class='w-full h-screen flex justify-center items-center'
        style={{backgroundColor:color}}
      >
        <select 
          name="color" 
          id="color"
          onChange={(e)=>{
            setColor(e.target.value);
          }}
        >
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
          <option value="yellow">yellow</option>
          <option value="pink">pink</option>
          <option value="purple">purple</option>
          <option value="violet">violet</option>
          <option value="aqua">aqua</option>
        </select>
      </div>
    </>
  )
}
export default App

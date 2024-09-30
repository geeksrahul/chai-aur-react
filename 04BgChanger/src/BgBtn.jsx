import React from 'react'

function BgBtn({id, foreColor, backColor, setColor}) {
  return (
    <button 
        className='py-1 px-5 rounded-md font-medium'
        style={{color : foreColor, backgroundColor : backColor}}
        onClick={
            ()=>{
                setColor(id);
            }
        }
    > 
        {id}
    </button>
  )
}

export default BgBtn
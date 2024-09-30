import React from 'react'

function Person( {data} ) {
  return (
    <div>
        <h1 className='text-4xl font-medium'> {data.name} </h1>
        <p className='text-2xl'>I'm a {data.job}</p>
        <p className='text-xl'> I live in {data.city} </p> 
    </div>
  )
}

export default Person
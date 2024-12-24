import React from 'react'
import MyComp from './comps/MyComp';
import Recipe from './comps/Recipe';

const App = () => {
  const handleClick = ()=> {
    window.alert("Clicked Man...");
  }

  return (
    <>
    <div>
      hello world at the time { Date.now() }
    </div>
    <MyComp />
    <Recipe/>
    <button onClick={handleClick} className='btn p-2 rounded-md border-red-500 bg-blue-500 hover:bg-opacity-0 hover:text-black transition-all duration-300'>Submit</button>
    </>
  )
}

export default App

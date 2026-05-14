
import './App.css'
import React from 'react'
import useCounter from './store/count'

function App() {

  const {value, increment, decrement, reset}  = useCounter((state)=> state);
  //count.js ===> j nam dawya aikhanw sei nam gula e hobe
  // console.log(count)
  return (
    <>
    
   
      <div className="py-20 bg-violet-500">
        <h1 className="text-3xl text-white font-bold mx-auto text-center">ZUSTAND</h1><br/>
        <h3 className=" text-white mx-auto text-center">State Managment that stores values in local storage</h3> <br/>
        <div className="max-w-330 mx-auto text-center">
            <h3 className="bg-white text-black py-3 px-10 inline-block mb-3">{value}</h3><br/>
            <button onClick={increment} className='bg-white text-black py-3 px-6 mr-3'>Increment+</button>
            <button onClick={decrement} className='bg-white text-black py-3 px-6 mr-3 '>Decrement-</button>
            <button onClick = {reset} className='bg-white text-black py-3 px-6'>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App

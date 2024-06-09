import { useState } from 'react'
import './App.css'

function App() {
  //let counter = 15 
const [counter, setCounter]= useState(0)

  const addValue = () =>{
   setCounter((prevCounter)=>prevCounter+ 1)
   setCounter((prevCounter)=>prevCounter+ 1)
   setCounter((prevCounter)=>prevCounter+ 1)
   setCounter((prevCounter)=>prevCounter+ 1)

  }

  const remValue = () =>{
    setCounter(counter -1)
  }
  return (
    <>
    <h1>React course with prajwal {counter}</h1>
    <h2>Counter Value :{counter}</h2>
    <button onClick={addValue}>Add Value</button>{" "}
    <button onClick={remValue}>Remove Vaue</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App

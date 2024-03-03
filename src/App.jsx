import React,{useState } from "react";


function App() {

  //let counter = 5;    this doesnt propagate in UI directly 

  let [counter,setCounter] = useState(15)

  const addValue = () => {
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
    setCounter(prevcounter=>prevcounter+1)
    
    }
  
  
  const removeValue = () => {
    counter = counter-1
    if(counter>=0){
    console.log("value added" , counter);
    setCounter( counter )
    }
  } 

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>

      <button 
      onClick={addValue}>Add value {counter}</button>
      <br/>
      <br/>
      <button
      onClick={removeValue}>Remove value {counter}</button>
    </>
  )
  } 

export default App

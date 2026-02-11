import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
export default App;

function App() {  
  const [counter,setCounter]=useState(15);
    
  const addValue =()=>{
    if(counter<20){
setCounter(counter+1); //Hooks
console.log(counter);
    }
    }
   
const removeValue =()=>{
  if(counter>0){
    setCounter(counter-1); //Hooks
console.log(counter);
  }
    
  }
  return (

    <>
      <h1>Chai our Code</h1>
      <h2>Counter Value:{counter}</h2>
      <button type="button" onClick={addValue}>Add Value</button>
      <button  type="button" onClick={removeValue}>Remove Value</button>
       </>
  );
}



// function App() {  let counter=15;
//   const addValue =()=>{
//     counter=counter+1;
//     console.log(  counter);
//    // console.log("value added ," ,Math.random());
//   }
//   return (

//     <>
//       <h1>Chai our Code</h1>
//       <h2>Counter Value:{counter}</h2>
//       <button  onClick={addValue}>Add Value</button>
//       <button>Remove Value</button>
//        </>
//   )
// }



// function App() {
//   return (
//     <>
//       <h1>chai our code</h1>
//        </>
//   )
// }


import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
     const [email,setName]=useState('');
     const [password,setPassword]=useState('');
     const handlesubmit=(e)=>{

         e.preventDefault();
         console.log( "email :",email);
         console.log( "password :",password);
     }
return (
    <>
      
       <form onSubmit={handlesubmit} method='post'   className='bg-light-subtle border border-black rounded form text-center p-4 m-4'>
        <button className='btn btn-primary text-center px-4 m-4'>Signup Form</button><br></br>
        <label className='form-label pt-4 'htmlFor='email'>Email :</label>
        <input type='text' className='form-control-md'id='email' value={email} placeholder='Enter Text Name' onChange={(e)=>setName(e.target.value)}/><br></br>
       <br></br>
       <label className='form-label'htmlFor='psb'>Password :</label>
        <input type='text' className='form-control-md'id='psb' value={password} placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}/><br></br>
       
       <br></br><button type='submit' className='btn btn-primary px-4 text-center'>Signup</button>
       </form>
       
       
    </>
  )
}

export default App

import React, { useState } from 'react'


const Form=()=> {
  const [name, setName]=useState("")
  const [fullName, setFullName]= useState()
  const onSubmits=(event)=>{
    event.preventDefault();
    setFullName(name)
    
  }
  const inputEvent=(event)=>{
   console.log(event.target.value);
   setName(event.target.value);
  }
 
 return(
  <>
  <div>
  <form onSubmit={onSubmits}>
  <div>
    <h1 style={{color:'red', backgroundColor:"yellow"}}>Hello {fullName}</h1>
    <input type='text' placeholder='Enter Your Name' onChange={inputEvent} value={name}/>
    <button type='submit'>Click Me 🥰</button>
  </div>
  </form>
  </div>
  </>
 );
};
export default Form;
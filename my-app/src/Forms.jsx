import React, { useState } from 'react'


const Form=()=> {
  const [change, setChange]=useState()
  const [fullName, setfullName]= useState()
  const eventChanged=(event)=>{
   console.log(event.target.value);
   setChange(event.target.value)
   setfullName()
  }
  const onSubmit=()=>{
    setfullName(change)
  }
 return(
  <>
  <div>
    <h1 style={{color:'red', backgroundColor:"yellow"}}>Hello {fullName}</h1>
    <input type='text' placeholder='Enter Your Name' onChange={eventChanged} value={change}/>
    <button onClick={onSubmit}>Click Me 🥰</button>
  </div>
  </>
 );
};
export default Form;
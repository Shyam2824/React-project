import React, { useState } from 'react'


const Event=()=> {
  let purple="green"
  const [bg, setBg]=useState(purple);
  
  const [name, setName]=useState("click me");

  const bgChange=() =>{
    let color= "blue"
    setBg(color);
    setName("wow 😄")
  }
  const bgBack=() =>{
  
    setBg(purple);
    setName("ouch!!! 😄")
  }

  return(
    <>
    <div style={{backgroundColor: bg}} >
    <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name} </button>
    
    </div>
    </>
  );
};
export default Event;
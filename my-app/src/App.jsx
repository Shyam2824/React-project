import React from 'react'
import { useState } from 'react';

const App=()=> {
  let time= new Date().toLocaleTimeString();
   const [count, setCount]=useState(time);
   const upDate=()=>{
   let cTime= new Date().toLocaleTimeString();
    setCount(cTime)
  };
  setTimeout(upDate, 1000)

  return (
    <>
      <h1>{count}</h1>
      {/* <button onClick={upDate}> Get Start</button> */}
    </>
  );
};
export default App;
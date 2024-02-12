import React, { useState } from 'react';



const App=()=>{
  //const count;
  //const state = useState();
//console.log(state);
const[count, setCount] = useState( 15); // setCount is updated value and count is initial value that should be pass in useState


const IncNum= () =>{
  setCount(count + 1);
  //console.log('clicked ' + count++);
};
const DecNum= () =>{
  setCount(count - 1);
  //console.log('clicked ' + count++);
};
  return (
    <>
    <h1>{count}</h1>
    <button onClick={IncNum}> Increase </button><br></br>
    <button onClick={DecNum}> Decrease</button>
    </>
  );
}

export default App;


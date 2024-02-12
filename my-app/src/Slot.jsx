import React from 'react';


const SlotM = () => {
 let x= '😄';
 let y= '😄';
 let z= '🧂';

 if((x===y) && (y===z)){
  return(
    <>
    {x} {y} {z}
    <h3> This is matching</h3>
    </>
  )
 }else{
  return(
    <>
    {x} {y} {z}
    <h3> This is not  matching</h3>
    </>
  )
 }
}

const App =() => {
  return (
    <>
    <h1 style={{textAlign: 'center'}}> 🎰 Welcome to <span style={{fontWeight:"bold"}}>Slot Machine Game</span> 🎰</h1>
    <SlotM/>
    </>
  );
}
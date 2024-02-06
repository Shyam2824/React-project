import React from 'react';

 function Heading() {
    const css={};
    let currDate= new Date();
    currDate= currDate.getHours();
    let gettingTime='';
    if(currDate>=1 && currDate<12){
        gettingTime='Good Morning';
        css.color='green'
    }else if(currDate>=12 && currDate<20){
        gettingTime='Good Afternoon';
        css.color='red'
    }else{
        gettingTime='good Night';
        css.color='orange'
    }
  return (
    <div>
      <h1 className='heading'>Hii, Here Shyam Sundar Singh <span style={css}> {gettingTime} </span></h1>
      <p>There should be no issue </p>
      <ol>
        <li>good code</li>
        <li>good mind</li>
        <li>good choice</li>
        <li>good work</li>
      </ol>
    </div>
  )
}
export default Heading;
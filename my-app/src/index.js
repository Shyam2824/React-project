import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';
import Scard from './Cards';


function nvalue(val) {
    console.log(val);
    return(
    <Card 
    key={val.id}
   image={val.image}
   sname={val.sname}
   Stitle={val.Stitle}
   link={val.link}
   />);
    
}
ReactDOM.render(
    <>
    <h1 className='heading'>Top movies in Netflix</h1>
   {Scard.map(nvalue)}

  
    </>,
    document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';


ReactDOM.render(
    <>
    <h1 className='heading'>Top movies in Netflix</h1>
   <Card 
   image="https://wallpapercave.com/wp/wp4056410.jpg" 
   sname="DARK"
   Stitle=" A Netflix Original Series"
   link="https://www.netflix.com/in/"
   />

   <Card
    image="https://wallpapercave.com/wp/wp1917154.jpg" 
    sname="BATMAN"
    Stitle=" A Netflix Original Series"
    link="https://www.netflix.com/in/"/>

   <Card
    image="https://wallpapercave.com/wp/wp1917154.jpg" 
    sname="DARK NIGHT"
    Stitle=" A Netflix Original Series"
    link="https://www.netflix.com/in/"/>
    </>,
    document.getElementById('root')
);
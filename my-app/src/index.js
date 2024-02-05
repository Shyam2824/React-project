import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let currDate= new Date(2024, 2, 5, 20);
currDate=currDate.getHours();

let changeTime=''
const CssStyle={ };
if(currDate>=1 && currDate<12){
    changeTime='Good Morning'
    CssStyle.color="green"
} else if(currDate>=12 && currDate<20){
    changeTime= 'Good Afternoon'
    CssStyle.color="red"
} else{
    changeTime= 'Good Night'
    CssStyle.color="black"
}

ReactDOM.render(
    <>
    <div>
    <h1> Hello Sir , <span style={CssStyle}>{changeTime}</span>  Shyam Sundar Singh</h1>
    </div>
    </>,
    document.getElementById('root')
);
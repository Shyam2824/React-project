import React from 'react'

function Card(props) {
  //console.log(props);
  return (
    <>
    <div className='cards'>
    <div className='card'>
        <img src= {props.image} alt='my pic' className='card_img' />
        <div className='card__info'>
            <span className='card__category'>{props.Stitle} </span>
            <h3 className='card_title'> {props.sname}</h3>
            <a href={props.link} target="_blank_blank">
                <button> Watch now </button>
            </a>
        </div>
    </div>
</div>
</>
  )
}

export default Card;

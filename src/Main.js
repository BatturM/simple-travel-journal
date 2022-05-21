import React from 'react'

export default function Main(props) {
  return (
      <div className='card'>
          <img src={props.img} alt='' className='card__image' />
          <img src='https://i.imgur.com/6RGAlmj.png' alt='' className='card__arrow' />
          <p className='card__country'>{props.country}</p>
          <a href={"https://www.google.com/search?q=" + props.link} className='card__link'>View on Google Maps</a>
      </div>
  )
}

import './card.css'
import React from 'react'
import Design from '../img/design.png'

const Card = ({img, link}) => {
  return (
    <div className="c">
      <div className="c-wrapper">
        <div className="c-browser">
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img
            alt="Product"
            src={Design}
            className="c-img" />
        </a>
      </div>
      <div className="c-info">
        <h2 className="p-name"> Portfolio 1</h2>
        <p className="p-desc"> asdasd asdasd asdasd asdasd a sss asda asdas aasdasdas</p>
      </div>
    </div>
  )
}

export default Card

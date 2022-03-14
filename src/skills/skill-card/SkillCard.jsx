import React from 'react'
import HTML from '../../img/html.png'
import './skillcard.css'

const SkillCard = ({title, desc, img}) => {
  return (
    <div className="sc">
      <img src={HTML} className="sc-icon" alt={title}/>
      <div className="sc-info">
        <h2 className="sc-title">
          {title}
        </h2>
        <p className="sc-desc">
          {desc}
        </p>
      </div>
    </div>
  )
}

export default SkillCard

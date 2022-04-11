import React from 'react'
import './skillcard.css'

const SkillCard = ({title, desc, image}) => {
  return (
    <div className="sc">
      <img src={image} className="sc-icon" alt={title}/>
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

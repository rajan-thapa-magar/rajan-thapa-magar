import React from 'react'
import './skills.css'

import userInfo from '../../user_info'
import SkillCard from './skill-card/SkillCard'

const Skills = () => {
  return (
    <div className="s">
      <h1 className="s-title">
        My Skills
      </h1>
      <div className="s-card">
        {userInfo.skills.map((data, index) => {
            return (
              <SkillCard
                  desc={data.desc}
                  image={data.image}
                  title={data.title}
                  style={data.style}
                  key={`skill-${index}`}/>)
        })}
      </div>
    </div>
  )
}

export { Skills }

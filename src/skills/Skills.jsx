import React from 'react'
import './skills.css'
import SkillCard from './skill-card/SkillCard'
import { skillData } from '../skilldata'

const Skills = () => {
  return (
    <div className="s">
      <h1 className="s-title">
        My Skills
      </h1>
      <div className="s-card">
        {skillData.map((data) => {
            return (
              <SkillCard key={data.id} title={data.title} desc={data.desc} style={data.style} img={data.img} />)
        })}
      </div>
    </div>
  )
}

export default Skills

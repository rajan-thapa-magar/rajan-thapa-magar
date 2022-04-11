import React from 'react';

import './projects.css';

import { projects } from '../../user_info';

import { ProjectItem } from "./components";

const Projects = () => {
  return (
    <div className="p">
      <div className="p-title">
        <h1 className="title">My Portfolios</h1>
      </div>

      <div className="p-desc">
        <p className="desc">{projects.message}</p>
      </div>

      <div className="p-cards">
        {projects.list.map((project,index) => {
          return (
            <ProjectItem
                image={project.img}
                link={project.link}
                title={project.title}
                key={`project-item-${index}`}
                description={project.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export { Projects }

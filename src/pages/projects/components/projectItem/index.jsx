import React from 'react';

import './ProjectItem.css';

const ProjectItem = ({ image, link, title, description }) => {
  return (
    <div className="c">
      <div className="c-wrapper">
        <a href={link} target="_blank" rel="noreferrer">
          <img
            alt="Product"
            src={image}
            className="c-img" />
        </a>
      </div>
      <div className="c-info">
        <h2 className="p-name">{title}</h2>
        <p className="p-desc">{description}</p>
      </div>
    </div>
  )
}

export { ProjectItem }

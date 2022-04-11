import React from 'react';

import './portfolio.css';

import Card from '../card/Card';
import { projects } from '../user_info';

const Portfolio = () => {
  return (
    <div className="p">
      <div className="p-title">
        <h1 className="title">My Portfolios</h1>
      </div>

      <div className="p-desc">
        <p className="desc">{projects.message}</p>
      </div>

      <div className="p-cards">
        {projects.list.map((data) => {
          return (
            <Card key={data.id} img={data.img} link={data.link} />
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio

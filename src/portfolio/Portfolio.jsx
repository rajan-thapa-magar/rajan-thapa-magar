import React from 'react';
import Card from '../card/Card';
import './portfolio.css';
// import Schedule from '..img/schedule.svg';
import { cardData } from '../data';

const Portfolio = () => {
  return (
    <div className="p">
      <div className="p-title">
        <h1 className="title">My Portfolios</h1>
      </div>

      <div className="p-desc">
        <p className="desc"> asda asdas asdas s sd sa dfgdf wer wer sdsf asdfa sdfdsdf sdfs dfsd fsdf sdf sdfs dfsd fsd fsdf sds</p>
      </div>
      
      <div className="p-cards">
        {cardData.map((data) => {
          console.log("Data -->", data);
          return (
            <Card key={data.id} img={data.img} link={data.link} />
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio

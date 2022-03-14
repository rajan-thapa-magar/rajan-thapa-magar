import React from 'react';
import './about.css';
import Mypic from '../img/about.png';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card">
          <img
            src={Mypic}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p>Bla bla sadasd asd asd asdasdas asda sdasdas dasdasdas dasdasd asdsdsd sdsd sdddd d d d d d asda asdas asdasd asdasd asdasdas asds as a asdsdasd asdasd </p><br/>
        <p>Bla bla sadasd asd asd asdasdas asda sdasdas dasdasdas dasdasd asdsdsd sdsd sdddd d d d d d asda asdas asdasd asdasd asdasdas asds as a asdsdasd asdasd Bla bla sadasd asd asd asdasdas asda sdasdas dasdasdas dasdasd asdsdsd sdsd sdddd d d d d d asda asdas asdasd asdasd asdasdas asds as a asdsdasd asdasd </p>
      </div>
    </div>
  )
}

export default About

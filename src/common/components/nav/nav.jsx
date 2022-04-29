import React from "react";

import userInfo from "../../../user_info";

import "./nav.scss";

const Nav = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav">
        <div className="logo">
          <a>
            <img src={userInfo.about.logo.src} alt="logo" />
          </a>
        </div>
        <ul className="n-list">
          <li>
            <a className="active" href="#homeSection">
              Home
            </a>
          </li>
          <li>
            <a href="#aboutMeSection">About me</a>
          </li>
          <li>
            <a href="#portfolioSection">My Portfolio</a>
          </li>
          <li>
            <a href="#mySkillsSection">My skills</a>
          </li>
          <li>
            <a href="#contactSection">Contact me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Nav };

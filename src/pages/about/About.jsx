import React from "react";
import "./about.css";

import userInfo from "../../user_info";

const About = () => {
  return (
    <div className="a" id="aboutMeSection">
      <div className="a-left">
        <div className="a-card">
          <img
            className="a-img"
            src={userInfo.about.profile.src}
            alt={userInfo.about.profile.alt}
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p>{userInfo.about.message_1}</p>
        <br />
        <p>{userInfo.about.message_2}</p>
        <br />
        <p>{userInfo.about.message_3}</p>
      </div>
    </div>
  );
};

export { About };

import "./intro.css";

import userInfo from "../../user_info";

const Intro = () => {
  return (
    <div className="i" id="homeSection">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hi, I'm</h2>
          <h1 className="i-name">{userInfo.name}</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              {userInfo.intro.skills.map((skill) => (
                <div key={skill} className="i-title-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="i-desc">{userInfo.intro.message}</div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg" />
        <img
          className="i-img"
          src={userInfo.intro.profile.src}
          alt={userInfo.intro.profile.alt}
        />
      </div>
    </div>
  );
};

export { Intro };

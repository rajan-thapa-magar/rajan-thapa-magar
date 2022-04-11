import './intro.css';

import userInfo from '../../user_info';

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, I am</h2>
          <h1 className="i-name">{userInfo.name}</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              {
                userInfo.intro.skills.map(skill => (
                    <div key={skill} className="i-title-item">{skill}</div>
                ))
              }
            </div>
          </div>
          <div className="i-desc">{userInfo.intro.message}</div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"/>
        <img src={userInfo.intro.profile} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro

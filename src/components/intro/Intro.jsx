import './intro.css';
import Mypic from '../../img/my-pic.png';

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, I am</h2>
          <h1 className="i-name">Rajan Thapa Magar</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">React Developer</div>
              <div className="i-title-item">Angular Developer</div>
            </div>
          </div>
          <div className="i-desc">
            I design and develop services for customers of all sizes, specializing in creating stylish, modern websites and web apps.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Mypic} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro

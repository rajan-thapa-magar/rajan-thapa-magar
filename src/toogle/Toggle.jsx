import React, { useContext } from 'react'
import { themeContext } from '../context'
import Sun from "../img/sun.png"
import Moon from "../img/moon.png"
import './toggle.css'

const Toggle = () => {
  const theme = useContext(themeContext)
  
  const handleClick = () => {
    theme.dispatch({type: 'TOGGLE'})
  }
  
  return (
    <div className="tog" style={{ backgroundColor: theme.state.darkMode ? 'white' : 'rgb(226, 226, 226)' }}>
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div className="t-button" onClick={handleClick} style={{ left: theme.state.darkMode ? 0 : 36 }}></div>

    </div>
  )
}

export default Toggle

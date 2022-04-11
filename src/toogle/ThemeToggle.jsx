import React  from 'react'

import './toggle.css'

import Sun from "../img/sun.png"
import Moon from "../img/moon.png"
import { useTheme } from '../context'

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="tog" style={{ backgroundColor: darkMode ? 'white' : 'rgb(226, 226, 226)' }}>
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div className="t-button" onClick={toggleTheme} style={{ left: darkMode ? 0 : 26 }}/>
    </div>
  )
}

export default ThemeToggle

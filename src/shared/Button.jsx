import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <div>
      <button>{props.buttonName}</button>
    </div>
  )
}

export default Button

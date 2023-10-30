import React from 'react'

const Button = ({onClick}) => {
  return (
    <button
    className="dropdown-btn"
    onClick={onClick}
  >
    Dropdown button
  </button>
  )
}

export default Button

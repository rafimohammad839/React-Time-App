import React from 'react'

const Button = ({ type, buttonTitle, onClick }) => {
  return (
    <button type={type} onClick={onClick}>{buttonTitle}</button>
  )
}

export default Button
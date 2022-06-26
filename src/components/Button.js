import React from 'react'

const Button = ({ type, buttonTitle, onClick, className }) => {
  return (
    <button type={type} onClick={onClick} className={className}>{buttonTitle}</button>
  )
}

export default Button
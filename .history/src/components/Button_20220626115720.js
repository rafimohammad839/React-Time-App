import React from 'react'

const Button = ({ type, buttonTitle }) => {
  return (
    <button type={type}>{buttonTitle}</button>
  )
}

export default Button
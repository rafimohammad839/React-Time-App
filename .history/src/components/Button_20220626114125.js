import React from 'react'

const Button = ({ buttonOptions, buttonTitle }) => {
  return (
    <button {...buttonOptions}>{buttonTitle}</button>
  )
}

export default Button
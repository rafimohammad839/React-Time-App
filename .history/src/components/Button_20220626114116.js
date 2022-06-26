import React from 'react'

const Button = ({ buttonOptions, buttonTitle }) => {
  return (
    <button {...buttonOptions}>Click Me</button>
  )
}

export default Button
import React, { useState } from 'react'

const Input = ({ type }) => {
  const [time, setTime] = useState();

  return (
    <input type={type} />
  )
}

export default Input
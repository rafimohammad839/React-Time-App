import React, { useState } from 'react'

const Input = ({ type }) => {
  const [time, setTime] = useState();

  const handleChange = (e) => {
    console.log(e.target)
  }

  return (
    <input type={type} value={time} onChange={handleChange} />
  )
}

export default Input
import React, { useState } from 'react'

const Input = ({ type, className }) => {
  
  return (
    <input type={type} className={className} value={time} onChange={handleChange} />
  )
}

export default Input
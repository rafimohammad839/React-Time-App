import React from 'react'
import Button from './Button'
import Input from './Input'

const Timer = () => {

  const handleChange = () => {
    
  }

  return (
    <div className='container'>
      <Input inputOptions={{
        type: 'number',
        className: 'minute',
        value: {},
        onchange: {handleChange}
      }} />
      <Input />
      <Button />
      <Button />
      <Button />
    </div>
  )
}

export default Timer
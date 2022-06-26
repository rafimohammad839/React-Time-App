import React from 'react'
import Button from './Button'
import Input from './Input'

const Timer = () => {

  const handleChange = (e) => {

  }

  const handleClick = (e) => {

  }

  return (
    <div className='container'>
      <Input inputOptions={{
        type: 'number',
        className: 'minute',
        value: {},
        onchange: {handleChange}
      }} />
      <Input inputOptions={{
        type: 'number',
        className: 'second',
        value: {},
        onchange: {handleChange}
      }} />
      <Button buttonOptions={{
        type: 'submit',
        className: 'primary',
      }} />
      <Button buttonOptions={{
        type: 'button',
        className: 'primary',
        onclick={handleClick}
      }} />
      <Button buttonOptions={{
        type: 'button',
        className: 'primary',
        onclick={handleClick}
      }} />
    </div>
  )
}

export default Timer
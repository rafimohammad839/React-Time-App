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
        name: {},
        onchange: {handleChange}
      }} />
      <Input inputOptions={{
        type: 'number',
        className: 'second',
        value: {},
        name: {},
        onchange: {handleChange}
      }} />
      <Button buttonOptions={{
        type: 'submit',
        className: 'primary',
      }} />
      <Button buttonOptions={{
        type: 'button',
        className: 'primary',
        onClick: {handleClick},
      }} />
      <Button buttonOptions={{
        type: 'button',
        className: 'primary',
        onClick: {handleClick},
      }} />
    </div>
  )
}

export default Timer
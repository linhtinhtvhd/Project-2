import React from 'react'

export const Button = ({handleClick,content,color, disabled}) => {
  return (
    <button style ={{background:color}} onClick={handleClick} className='btn' disabled={disabled}>{content}</button>
  )
}

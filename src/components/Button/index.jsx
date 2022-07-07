import React from 'react'

export const Button = ({handleClick,content,color}) => {
  return (
    <button style ={{background:color}} onClick={handleClick} className='btn'>{content}</button>
  )
}

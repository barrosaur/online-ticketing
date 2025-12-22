import React from 'react'

interface ButtonProps {
    btnLabel: string,
}

const Button = ( { btnLabel } : ButtonProps) => {
  return (
    <button className='w-24'>
        <h2 className='cursor-pointer hover:text-(--red-light)'>
            { btnLabel }
        </h2>
    </button>
  )
}

export default Button
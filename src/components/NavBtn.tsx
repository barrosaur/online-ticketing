import React from 'react'

interface ButtonProps {
  btnLabel: string,
  onSwitchPage: () => void,
}

const Button = ( { btnLabel, onSwitchPage } : ButtonProps) => {
  return (
    <button 
      className='py-3 w-24 focus:text-(--red-light) focus:border-b-2 border-(--red-light)'
      onClick={() => onSwitchPage()}
    >
      <h2 className='cursor-pointer hover:text-(--red-light)'>
        { btnLabel }
      </h2>
    </button>
  )
}

export default Button
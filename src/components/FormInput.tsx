'use client'
import React from 'react'

interface FormInputProps {
  label: string,
  type: string,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const FormInput = ({ label, type, value, setValue }: FormInputProps) => {
  return (
    <div className='flex flex-col'>
      <label> {label} </label>
      <input 
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='border border-solid border-black px-2 py-1 w-96' 
        autoComplete='off'
      />
    </div>
  )
}

export default FormInput
import React from 'react'

interface FormSelectProps {
  label: string,
  selectValue: string,
  setSelectValue: (selectValue: string) => void,
  defaultOption: string,
  options: string[],
}

const FormSelect = ({ label, selectValue, setSelectValue, defaultOption, options }: FormSelectProps) => {
  return (
    <div className='flex flex-col'>
      <label>{label}</label>
      <select
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
        className='border border-solid border-black px-2 py-2 w-96'
      >
        <option value="" defaultChecked>{defaultOption}</option>  

        {
          options.map((option, i) => (
            <option value={option} key={i}>{option}</option>
          ))
        }

      </select>
    </div>
  )
}

export default FormSelect
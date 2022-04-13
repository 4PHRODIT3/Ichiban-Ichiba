import React from 'react';
import './styles.css';

const SelectBox = ({label,options,value,setValue,mx = "0rem"}) => {
  return (
    <div className={`ichiban__ichiba__selectbox`}>
        <select className="" aria-label={label} value={value} onChange={(e) => setValue(e.target.value)} onBlur={(e) => setValue(e.target.value)}>
            {
                options?.map(option => (
                    <option key={option.value} value={option.value} >{ option.optionText }</option>
                ))
            }
        </select>
    </div>
  )
}

export default SelectBox;
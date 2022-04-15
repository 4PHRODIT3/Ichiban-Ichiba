import React from 'react';
import "./styles.css";

const ColorPalettes = ({colors}) => {
  return (
    <div className='ichiban__ichiba__colors-choose'>
        {
            colors?.map(color => (
                <div className="ichiban__ichiba__colors-choose__btn" style={{backgroundColor: color}} key={color}></div>
            ))
        }
    </div>
  )
}

export default ColorPalettes
import React, { useState } from 'react';
import './styles.css';

const Carousel = ({imgs}) => {
  const [active,setActive] = useState(0);
  return (
    <div className='ichiban__ichiba__carousel'>
        <img src={imgs.main[active]} alt="Product Image" className='ichiban__ichiba__carousel__hero' />
        <div className="ichiban__ichiba__carousel__img-container">
            {
                imgs?.thumb.map((img,index) => (
                    <div className={`ichiban__ichiba__carousel__img-container__img ${active == index && 'ichiban__ichiba__carousel__img-container__active-img'}`}  key={`Product-Img-${index}`}>
                        <img src={img} alt={`Product Image ${index}`} onClick={() => setActive(index)} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Carousel
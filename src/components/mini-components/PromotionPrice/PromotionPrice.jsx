import React from 'react';
import "./styles.css";

const PromotionPrice = ({current_price,promotion_price}) => {
  return (
    <>
        <h3 className="ichiban__ichiba__promotion-price">
          <span className='ichiban__ichiba__promotion-old-price'>{current_price}</span>
          <span className='ichiban__ichiba__promotion-price__main-price'>$ {promotion_price}</span>
        </h3>
    </>
  )
}

export default PromotionPrice
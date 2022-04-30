import React from 'react';
import { Review,PromotionPrice } from '../index';
import "./styles.css";

const FullProductCard = ({img,toggleModal,product_title}) => {
  return (
    <div className='ichiban__ichiba__full-product-card'>
        <div className="ichiban__ichiba__full-product-card__img-section">
            <img src={img} alt="" />
            <button className="ichiban__ichiba__normal__quick-view" onClick={() => toggleModal()}>
                QUICK VIEW
            </button>
        </div>
        <div className="ichiban__ichiba__full-product-card__content-section">
            <h6 className='ichiban__ichiba__full-product-card__content-section__brand'>Samsung</h6>
            <h2 className='ichiban__ichiba__full-product-card__content-section__title'>Samsung Electronics UN55MU6500 Curved 55-Inch 4K Ultra HD Smart LED TV (2019 Model)</h2>
            <Review />
            <ul className='ichiban__ichiba__full-product-card__content-section__facts'>
              <li>4X more pixels than Full HD means you’re getting 4X the resolution, so you’ll clearly see the difference.</li>
              <li>See vibrant and pure color for a realistic experience.</li>
              <li>OneRemote automatically detects and controls all your connected devices and content with no manual programming required*.</li>
              <li>Smooth action on fast-moving content with Motion Rate 120</li>
            </ul>
        </div>
        <div className="ichiban__ichiba__full-product-card__checkout-section">
          <button className='ichiban__ichiba__full-product-card__checkout-section__delivery-btn'>
            <i className="fa-solid fa-truck"></i> Free Delivery
          </button>
          <PromotionPrice current_price={756.50} promotion_price={406.65} />
          <h6 className='ichiban__ichiba__full-product-card__checkout-section__availability'>Availability: <span className='ichiban__ichiba__full-product-card__checkout-section__available'>In Stock</span></h6>
          <button className='ichiban__ichiba__full-product-card__checkout-section__cart-btn'>Add To Cart</button>
          <button className='ichiban__ichiba__full-product-card__checkout-section__cart-btn'>Add To Compare</button>
        </div>
    </div>
  )
}

export default FullProductCard
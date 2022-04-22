import React from 'react';
import { cart_img_1,cart_img_2 } from '../../../img';
import "./styles.css";

const HoverCart = () => {
  return (
    <div className='ichiban-ichiba__hover-cart'>
        <div className="ichiban-ichiba__hover-cart__item">
            <img src={cart_img_1} alt="cart-item-1" />
            <div className="ichiban-ichiba__hover-cart__item__content">
                <h3>$460.00 x 1</h3>
                <p>Kabino Bedside Table</p>
            </div>
            <button>
                <i className='fas fa-times'></i>
            </button>
        </div>
        <div className="ichiban-ichiba__hover-cart__item">
            <img src={cart_img_2} alt="cart-item-2" />
            <div className="ichiban-ichiba__hover-cart__item__content">
                <h3>$460.00 x 1</h3>
                <p>Kabino Bedside Table</p>
            </div>
            <button>
                <i className='fas fa-times'></i>
            </button>
        </div>
        <div className="ichiban-ichiba__hover-cart__checkout">
            <div className="ichiban-ichiba__hover-cart__checkout__total">
                <p id='cart-text'>TOTAL:</p>
                <p id='cart-text'>$460.00</p>
            </div>
            <button className='ichiban-ichiba__hover-cart__checkout--btn-dark'>VIEW CART</button>
            <button>CHECKOUT</button>
        </div>
    </div>
  )
}

export default HoverCart
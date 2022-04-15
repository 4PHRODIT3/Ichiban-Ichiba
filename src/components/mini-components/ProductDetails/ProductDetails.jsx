import React, { useState } from 'react';
import'./styles.css';
import { thumb1,thumb2,thumb3,main1,main2,main3 } from '../../../img';
import Carousel from '../Carousel/Carousel';
import Review from '../Review/Review';
import ColorPalettes from '../ColorPalettes/ColorPalettes';

const ProductDetails = ({toggleModal}) => {

    const [quantity,setQuantity] = useState(1);

  return (
    <div className='ichiban__ichiba__product-details-card'>
        <div className="ichiban__ichiba__product-details-card__close">
            <button id='close-modal' onClick={() => toggleModal()}><i className="fas fa-times"></i></button>
        </div>
        <hr />
        <div className="ichiban__ichiba__product-details-card-body">
            <div className="ichiban__ichiba__product-details-card-body__carousel">
                <Carousel imgs={{thumb: [thumb1,thumb2,thumb3], main: [main1,main2,main3]}} />
            </div>
            <div className="ichiban__ichiba__product-details-card-body__contents">
                <div className="ichiban__ichiba__product-details-card-body__contents__details">
                    <h2>Apple The New MacBook Retina 2016 MLHA2 12 inches</h2>
                    <ul id='product-facts'>
                        <li>1.6 GHz dual-core Intel Core i5 (Turbo Boost up to 2.7 GHz) with 3 MB shared L3 cache 8 GB of 1600 MHz LPDDR3 RAM; 128 GB PCIe-based flash storage</li>
                        <li>13.3-Inch (diagonal) LED-backlit Glossy Widescreen Display, 1440 x 900 resolution Intel HD Graphics 6000</li>
                        <li>OS X El Capitan, Up to 12 Hours of Battery Life Macbook Air does not have a Retina display on any model.</li>
                    </ul>
                    
                    <div className='ichiban__ichiba__product-details-card-body__contents__details__tags'>
                        <h6>SKU: 00012 | Categories: </h6>
                        <ul id='product-tags'>
                            <li><a href="">Tech</a></li>
                            <li><a href="">Macbook</a> </li>
                            <li><a href="">Laptop</a></li>
                        </ul>
                    </div>
                    <div className='ichiban__ichiba__product-details-card-body__contents__details__tags'>
                        <h6>Tags:</h6>
                        <ul id='product-tags'>
                            <li><a href="">Tech</a></li>
                            <li><a href="">Apple</a></li>
                        </ul>
                    </div>
                </div>
                <div className="ichiban__ichiba__product-details-card-body__contents__actions">
                    <div id='product-delivery'><i className="fa-solid fa-truck"></i> FREE DELIVERY</div>
                    <div className="ichiban__ichiba__product-details-card-body__contents__actions__price">
                        <h3>$495.00</h3>
                        <Review />
                    </div>
                    <div>
                        <h3>Available Colors:</h3>
                        <div className="">
                            <ColorPalettes colors={['#C0C0C0','#e9d7c3','#fff000']} />
                        </div>
                    </div>
                    <div id="product-quantity" >
                        <h3>Quantity</h3>
                        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </div>
                    <button id="modal-add-to-cart">
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
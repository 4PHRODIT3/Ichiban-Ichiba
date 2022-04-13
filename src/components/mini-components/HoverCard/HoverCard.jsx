import React from 'react';
import "./styles.css";


const HoverCard = ({subheading,heading,price,review,img}) => {
  return (
    <div className='ichiban__ichiba__hover-card group'>
        <h6 className='ichiban__ichiba__hover-card__sub-heading'>AQUARACER</h6>
        <h2 className='ichiban__ichiba__hover-card__heading'>iPATROL RILEY - WiFi Enabled Mobilized Home Monitoring</h2>

        <img src={img} alt={subheading} />
        <div className="ichiban__ichiba__hover-card__view">
            QUICK VIEW
        </div>
        <hr className='ichiban__ichiba__hover-card__line' />
        <div className="ichiban__ichiba__hover-card__info">
            <h3>$395.00</h3>
            <div className="ichiban__ichiba__hover-card__info__reviews">
                <div className="">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
                <h6>(0)</h6>
            </div>
        </div>
        <div className="ichiban__ichiba__hover-card__add-to-card">
            <button className='group'><i class="fa-solid fa-shuffle"></i></button>
            <button id='add-to-cart'>ADD TO CART</button>
            <button className='group'><i className="fa-regular fa-heart"></i></button>
        </div>
    </div>
  )
}

export default HoverCard
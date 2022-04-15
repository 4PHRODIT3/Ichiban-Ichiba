import React,{useState} from 'react';
import Review from '../Review/Review';
import "./styles.css";


const HoverCard = ({subheading,heading,price,review,img,toggleModal}) => {

    return (
        <div className='ichiban__ichiba__hover-card group'>
            <h6 className='ichiban__ichiba__hover-card__sub-heading'>AQUARACER</h6>
            <h2 className='ichiban__ichiba__hover-card__heading'>iPATROL RILEY - WiFi Enabled Mobilized Home Monitoring</h2>

            <img src={img} alt={subheading} />
            <button className="ichiban__ichiba__hover-card__view" onClick={() => toggleModal()}>
                QUICK VIEW
            </button>
            <hr className='ichiban__ichiba__hover-card__line' />
            <div className="ichiban__ichiba__hover-card__info">
                <h3>$395.00</h3>
                <div className="ichiban__ichiba__hover-card__info__reviews">
                    <Review />
                    <h6>(0)</h6>
                </div>
            </div>
            <div className="ichiban__ichiba__hover-card__add-to-card">
                <button className='group'><i className="fa-solid fa-shuffle"></i></button>
                <button id='add-to-cart'>ADD TO CART</button>
                <button className='group'><i className="fa-regular fa-heart"></i></button>
            </div>
        </div>
    )
}

export default HoverCard
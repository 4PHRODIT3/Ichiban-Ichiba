import React from 'react';
import './styles.css';
import {li1} from '../../../img';

const LatestitemsCard = () => {
  return (
    <div className='ichiban-ichiba__latest-items-card'>
        <div className='ichiban-ichiba__latest-items-card-layout'>
            <div className='ichiban-ichiba__latest-items-card-content'>
                <div className='ichiban-ichiba__latest-items-card-content__pic'>
                    <a href='#'>
                        <img src={li1} alt='product'/>
                    </a>
                </div>
                <div className='ichiban-ichiba__latest-items-card-content__title'>
                    <div>
                        <h4>
                            <a href='#'>Vantech VP-15C3 Camera</a>
                        </h4>
                    </div>
                    <div className='ichiban-ichiba__latest-items-card-content__title__pricetag'>
                        <span>$195.00</span>
                        <del>$229.99</del>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestitemsCard
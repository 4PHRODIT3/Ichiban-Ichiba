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
            </div>
        </div>
    </div>
  )
}

export default LatestitemsCard
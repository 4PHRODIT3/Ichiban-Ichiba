import React from 'react';
import './styles.css';

const LatestitemsCard = () => {
  return (
    <div className='ichiban-ichiba__latest-items-card'>
        <div className='ichiban-ichiba__latest-items-card-layout'>
            <div className='ichiban-ichiba__latest-items-card-content'>
                <div className='ichiban-ichiba__latest-items-card-content__pic'>
                    <a href='#'>
                        <img src="src/img/li1.jpg" alt='product'/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestitemsCard
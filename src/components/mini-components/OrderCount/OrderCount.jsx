import React from 'react';
import './styles.css';

const OrderCount = ({path,icon,count}) => {
  return (
    <>
        <a href="">
            <i className={icon}></i>
            <div className={ count > 0 ? `ichiban-ichiba__navbar__order-count` : '' } >{count}</div>
        </a>
    </>
  )
}

export default OrderCount;
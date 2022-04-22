import React from 'react';
import './styles.css';

const OrderCount = ({state,setState,icon,count}) => {
  return (
    <>
        <button onClick={() => setState(!state)}>
            <i className={icon}></i>
            <div className={ count > 0 ? `ichiban-ichiba__navbar__order-count` : '' } >{count}</div>
        </button>
    </>
  )
}

export default OrderCount;
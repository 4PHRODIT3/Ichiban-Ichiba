import React from 'react';
import './styles.css';

const Breadcrumbs = ({path = ""}) => {
  return (
    <div className='ichiban__ichiba__breadcrumbs general__paddingx'>
        <a href="" className='ichiban__ichiba__breadcrumbs__link'>Home</a>
        <a href="" className='ichiban__ichiba__breadcrumbs__link'>Smartphones & Tablets</a>
        <a href="" className='ichiban__ichiba__breadcrumbs__link'>Shop Grid 05 Col</a>
    </div>
  )
}

export default Breadcrumbs;
import React from 'react';
import './styles.css';
import { LatestitemsCard } from '../index'

const Latestitems = () => {
  return (
    <div className='ichiban-ichiba__sidebar__latest-items'>
        <div className='ichiban-ichiba__sidebar__latest-items__layout'>
            <h3>
                Latest Items
            </h3>
            <div>
                <LatestitemsCard/>
            </div>
        </div>
    </div>
  )
}

export default Latestitems
import React from 'react';
import './styles.css';

const Filter = () => {
  return (
    <div className='ichiban-ichiba__sidebar__filter'>
      <div className='ichiban-ichiba__sidebar__filter__price-title'>
        <h3>
          Filter by price
        </h3>
      </div>
      <div className='ichiban-ichiba__sidebar__filter__price-slider'>
        <div className='ichiban-ichiba__sidebar__filter__price-slider-amount'>
          <input type="text" id="amount" name="price" placeholder="Add Your Price"/> 
        </div>
      </div>
      <div className='ichiban-ichiba__sidebar__filter__list-filter'>
        <h3>Brands</h3>
        <ul>
          <li>
            <input type="checkbox" className='appearance-none checked:bg-blue-500'/>
            <label htmlFor='acer'>Acer</label>
          </li>
          <li>
            <input type="checkbox" className='appearance-none checked:bg-blue-500'/>
            <label htmlFor='apple'>Apple</label>
          </li>
          <li>
            <input type="checkbox" className='appearance-none checked:bg-blue-500'/>
            <label htmlFor='asus'>Asus</label>
          </li>
          <li>
            <input type="checkbox" className='appearance-none checked:bg-blue-500'/>
            <label htmlFor='gionee'>Gionee</label>
          </li>
          <li>
            <input type="checkbox" className='appearance-none checked:bg-blue-500'/>
            <label htmlFor='htc'>HTC</label>
          </li>
          <li>
            <a href='#'>
              + Show more
            </a>
          </li>
        </ul>
      </div>
      <div className='ichiban-ichiba__sidebar__filter__list-filter'>
        <h3>Colors</h3>
        <ul>
          <li>
            <input type="checkbox" className='appearance-none checked:bg-blue-500'/>
            <label htmlFor='black'>Black</label>
          </li>
          <li>
            <input type="checkbox" className='appearance-none checked:bg-blue-500'/>
            <label htmlFor='pink'>Pink</label>
          </li>
          <li>
            <input type="checkbox" className='appearance-none checked:bg-blue-500'/>
            <label htmlFor='white'>White</label>
          </li>
          <li>
            <input type="checkbox" className='appearance-none checked:bg-blue-500'/>
            <label htmlFor='blue'>Blue</label>
          </li>
          <li>
            <input type="checkbox" className='appearance-none checked:bg-blue-500'/>
            <label htmlFor='orange'>Orange</label>
          </li>
          <li>
            <a href='#'>
              + Show more
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Filter;
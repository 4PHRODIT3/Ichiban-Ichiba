import React from 'react';
import "./styles.css";
import { ProductList,Filter,Latestitems } from '../mini-components';

const Sidebar = () => {
  return (
    <div className=''>
      <div className="ichiban__ichiba__sidebar__departments">
        <ProductList/>
      </div>
      <div>
        <Filter/>
      </div>
      <div>
        <Latestitems/>
      </div>
    </div>
  )
}

export default Sidebar
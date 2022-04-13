import React, { useState } from 'react';
import { SelectBox } from '../mini-components';
import Sidebar from '../Sidebar/Sidebar';
import "./styles.css";

const ProductsSection = () => {

  const [sortOrder,setSortOrder] = useState(0);
  const [displayLimit, setDisplayLimit ] = useState(0);

  const sortOptions = [
    { value: 0, optionText: "Default Sorting"},
    { value: 1, optionText: "Sort by A-Z"},
    { value: 2, optionText: "Sort Price Low - High"}
  ];

  const displayLimitOptions = [
    { value: 0, optionText: "Show: 12"},
    { value: 1, optionText: "Show: 8"},
    { value: 2, optionText: "Show: 4"}
  ];

  return (
    <div className='ichiban__ichiba__products-section general__paddingx'>
        <div className="ichiban__ichiba__products-section__container">
            <div className="sidebar__placeholder">
              <Sidebar />
            </div>
            <div className="ichiban__ichiba__products-section__container__products">
                <div className="ichiban__ichiba__products-section__container__products__filters">
                    <div className="ichiban__ichiba__products-section__container__products__filters__left">
                      <h2>Shop Grid 05 Col</h2>
                      <div className="ichiban__ichiba__products-section__container__products__filters__left__filters">
                        <SelectBox value={sortOrder} setValue={setSortOrder} label={"Sorting Order"} options={sortOptions} />
                        <SelectBox value={displayLimit} setValue={setDisplayLimit} label={"Display Limit"} options={displayLimitOptions} />
                      </div>
                    </div>
                    <div className="ichiban__ichiba__products-section__container__products__filters__right">
                      <button><i className="fas fa-th"></i></button>
                      <button><i className="fas fa-list"></i></button>
                      <div className="ichiban__ichiba__products-section__container__products__filters__right__pagenum">
                        1
                      </div>
                      <p>of&nbsp;&nbsp;3</p>
                      <button style={{marginLeft:"1rem"}}><i className="fas fa-long-arrow-alt-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductsSection
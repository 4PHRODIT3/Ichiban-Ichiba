import React, { useState } from 'react';
import { Modal, ProductDetails, SelectBox } from '../mini-components';
import HoverCard from '../mini-components/HoverCard/HoverCard';
import Sidebar from '../Sidebar/Sidebar';
import { img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12 } from '../../img';
import "./styles.css";

const ProductsSection = () => {

  const [sortOrder,setSortOrder] = useState(0);
  const [displayLimit, setDisplayLimit ] = useState(0);
  const [gridLayout, toggleGridLayout] = useState(true);
  const [modal,showModal] = useState(false);

  function toggleModal(){
    document.body.classList.toggle('ichiban__ichiba__scroll-hidden');
    showModal(!modal);
  }

  const products = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
  ]

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
                      <button onClick={() => toggleGridLayout(false) }><i className="fas fa-list"></i></button>
                      <div className="ichiban__ichiba__products-section__container__products__filters__right__pagenum">
                        1
                      </div>
                      <p>of&nbsp;&nbsp;3</p>
                      <button style={{marginLeft:"1rem"}}><i className="fas fa-long-arrow-alt-right"></i></button>
                    </div>
                </div>
                {
                  gridLayout ? (
                    <div className="ichiban__ichiba__products-section__container__products__grid-view">
                        <HoverCard toggleModal={toggleModal} img={img1} />
                        <HoverCard toggleModal={toggleModal} img={img2} />
                        <HoverCard toggleModal={toggleModal} img={img3} />
                        <HoverCard toggleModal={toggleModal} img={img4} />
                        <HoverCard toggleModal={toggleModal} img={img5} />
                        <HoverCard toggleModal={toggleModal} img={img6} />
                        <HoverCard toggleModal={toggleModal} img={img7} />
                        <HoverCard toggleModal={toggleModal} img={img8} />
                        <HoverCard toggleModal={toggleModal} img={img9} />
                        <HoverCard toggleModal={toggleModal} img={img10} />
                        <HoverCard toggleModal={toggleModal} img={img11} />
                        <HoverCard toggleModal={toggleModal} img={img12} />
                    </div>
                  ) :
                  <div className="ichiban__ichiba__products-section__container__products__normal-view">

                  </div>
                }
                {
                  modal && (
                    <Modal>
                      <ProductDetails toggleModal={toggleModal} />
                    </Modal>
                  )
                }
            </div>
        </div>
    </div>
  )
}

export default ProductsSection
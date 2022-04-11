import React,{ useState } from 'react';
import { logo } from '../../img/index';

import './styles.css';

const Navbar = () => {
  const [category,setCategory] = useState(0);
  
  function toggleNav(){
    document.querySelector(".ichiban-ichiba__navbar__mainnav-links").classList.toggle("ichiban-ichiba__navbar__active");
  }

  return (
    <header className='ichiban-ichiba__navbar'>
        <div className="ichiban-ichiba__navbar__mininav">
            <div className="ichiban-ichiba__navbar__mininav__highlight">
                <p>SHOP EVENTS & SAVE UP TO <span className="text-primary">65% OFF!</span></p>
                <p>CALL US: <a href="tel:+001-1234-88888" className='text-primary'>001-1234-88888</a></p>
            </div>
            <div className="ichiban-ichiba__navbar__mininav__social-links">
              <a href=""><i className="fa-brands fa-facebook-f"></i></a>
              <a href=""><i className="fa-brands fa-instagram"></i></a>
              <a href=""><i className="fa-brands fa-twitter"></i></a>
            </div>
        </div>
        <div className="ichiban-ichiba__navbar__mainnav">
          <div className="">
            <img src={logo} alt="Ichiban Ichiba E-commerce Shop" />
          </div>
          <div className="ichiban-ichiba__navbar__mainnav-links">
            <h6 className='hidden'>Menu <button onClick={() => toggleNav()}><i class="fa-solid fa-xmark"></i></button></h6>
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">Pages</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
            <a href="">Purchase Theme</a>
          </div>
          <div className="ichiban-ichiba__navbar__mainnav-auth">
            <a href="">Register</a> / <a href="">Signin</a>
          </div>
          <div className="ichiban-ichiba__navbar__order ichiban-ichiba__navbar__mobile-order">
            <a href=""><i className="fa-regular fa-heart"></i></a>
            <a href=""><i className="fa-solid fa-bag-shopping"></i></a>
          </div>
        </div>
        <div className="ichiban-ichiba__navbar__filter">
          <div className="ichiban-ichiba__navbar__filter__department">
            <button onClick={() => toggleNav()}><i className="fa-solid fa-bars "></i></button>
            <button> ALL DEPARTMENTS</button>
          </div>
          <div className="ichiban-ichiba__navbar__filter__form">
            <select className="ichiban-ichiba__navbar__filter__form__category-filter " aria-label="Category Select" value={category} onChange={(e) => setCategory(e.target.value)} onBlur={(e) => setCategory(e.target.value)}>
                <option selected value={0} >All Categories</option>
                <option value={1} >Computer</option>
                <option value={2} >TV & Smartbox</option>
                <option value={3}>Camera & Photography </option>
                <option value={4}>Headphones </option>
            </select>
            <input type="text" placeholder='What do you need?' />
            <button>Search</button>
          </div>
          <div className="ichiban-ichiba__navbar__order">
            <a href=""><i className="fa-solid fa-truck"></i></a>
            <a href=""><i className="fa-regular fa-heart"></i></a>
            <a href=""><i className="fa-solid fa-bag-shopping"></i></a>
            <p>$ 18000</p>
          </div>
        </div>
    </header>
  )
}

export default Navbar
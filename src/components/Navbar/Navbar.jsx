import React,{ useState,useEffect } from 'react';
import { logo } from '../../img/index';
import { OrderCount, SelectBox } from '../mini-components';

import './styles.css';

const Navbar = () => {
  const [category,setCategory] = useState(0);
  const [nav,showNav] = useState(false);
  const [lastScrollY,setLastScrollY] = useState(0);

  function navControl(){
    if(typeof window != 'undefined'){
      var currentScrollY = window.pageYOffset;
      if(currentScrollY > lastScrollY || currentScrollY == 0){
        showNav(false);
      }
      else{
        showNav(true);
      }
      setLastScrollY(currentScrollY);
    }
  }

  useEffect(() => {

    window.addEventListener("scroll",navControl);
    return () => window.removeEventListener("scroll",navControl);

  },[lastScrollY]);

  const categoryOptions = [
    {value: 0, optionText: "All Categories"},
    {value: 1, optionText: "TV & Smartbox"},
    {value: 2, optionText: "Camera & Photography"},
    {value: 3, optionText: "Headphones"},
  ]
  
  function toggleNav(){
    document.querySelector(".ichiban-ichiba__navbar__mainnav-links").classList.toggle("ichiban-ichiba__navbar__active");
  }

  return (
    <header className='ichiban-ichiba__navbar'>
        <div className="ichiban-ichiba__navbar__mininav general__paddingx">
            <div className="ichiban-ichiba__navbar__mininav__highlight">
                <p>SHOP EVENTS & SAVE UP TO <span className="text-primary">65% OFF!</span></p>
                <p>CALL US: <a href="tel:+001-1234-88888" className='text-primary'>001-1234-88888</a></p>
            </div>
            <div className="ichiban-ichiba__navbar__mininav__social-links">
              <a href=""><i className="fa-brands fa-facebook-f"></i></a>
              <a href=""><i className="fa-brands fa-instagram"></i></a>
              <a href=""><i className="fa-brands fa-twitter"></i></a>
              <a href=""><i className="fa-brands fa-youtube"></i></a>
            </div>
        </div> 
        <div className={`ichiban-ichiba__navbar__mainnav general__paddingx ${nav ? 'ichiban-ichiba__navbar__mainnav-scroll' : 'ichiban-ichiba__navbar__mainnav-hidden'}`}>
          <div className="">
            <img src={logo} alt="Ichiban Ichiba E-commerce Shop" />
          </div>
          <div className="ichiban-ichiba__navbar__mainnav-links">
            <h6 className='hidden'>Menu <button onClick={() => toggleNav()}><i className="fa-solid fa-xmark"></i></button></h6>
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
            <OrderCount icon={"fa-regular fa-heart"} count={2} link={""} />
            <OrderCount icon={"fa-solid fa-bag-shopping"} count={4} link={""} />
          </div>
        </div>
        <div className="ichiban-ichiba__navbar__filter general__paddingx">
          <div className="ichiban-ichiba__navbar__filter__department">
            <button onClick={() => toggleNav()}><i className="fa-solid fa-bars "></i></button>
            <button> ALL DEPARTMENTS</button>
          </div>
          <div className="ichiban-ichiba__navbar__filter__form">
            <div className="ichiban-ichiba__navbar__filter__form__category-filter">
              <SelectBox label={"Category Filter"} value={category} setValue={setCategory} options={categoryOptions} />
            </div>
            <input type="text" placeholder='What do you need?' />
            <button>Search</button>
          </div>
          <div className="ichiban-ichiba__navbar__order">
            <OrderCount icon={"fa-solid fa-truck"} link={""} />
            <OrderCount icon={"fa-regular fa-heart"} count={2} link={""} />
            <OrderCount icon={"fa-solid fa-bag-shopping"} count={4} link={""} />
            <p style={{marginLeft: ".5rem"}}>$ 18000</p>
          </div>
        </div>
    </header>
  )
}

export default Navbar
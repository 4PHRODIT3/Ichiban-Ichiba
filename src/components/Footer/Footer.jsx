import React from 'react'
import { logo } from '../../img/index';
import './styles.css';
import {p1, p2, p3, p4, p5, p6} from '../../img';

const Footer = () => {
  return (
    <footer className='ichiban-ichiba__footer'>
      <div className='ichiban-ichiba__footer__area'>
        <div className='ichiban-ichiba__footer__lgblk'>
          <div className='ichiban-ichiba__footer__lgblk__company-info'>
            <img src={logo} alt="Ichiban Ichiba E-commerce Shop" />
            <p className='mb-[5px]'>101 E 129th St, East Chicago, <br></br>IN 46312, US</p>
            <p>Phone: 001-1234-88888</p>
            <p>Email: info.deercreative@gmail.com</p>
          </div>
          <div className='ichiban-ichiba__footer__lgblk__copyright'>
            <p>
              Copyright 2019 © <a href='#'>HakDuck</a> All rights <br></br>reserved.
            </p>
          </div>
          <div className='ichiban-ichiba__footer__lgblk__payment'>
            <img src={p1} alt='card 1'/>
            <img src={p2} alt='card 2'/>
            <img src={p3} alt='card 3'/>
            <img src={p4} alt='card 4'/>
            <img src={p5} alt='card 5'/>
            <img src={p6} alt='card 6'/>
          </div>
        </div>
        <div className='ichiban-ichiba__footer__smblk-first'>
          <div className='ichiban-ichiba__footer__smblk__head'>
            <h4>Find It Fast</h4>
          </div>
          <div className='ichiban-ichiba__footer__smblk__items'>
            <ul>
              <li><a href='#'>Laptop & Computers</a></li>
              <li><a href='#'>Smart Phone & Tablets</a></li>
              <li><a href='#'>TV & Audio</a></li>
              <li><a href='#'>Cameras & Photography</a></li>
              <li><a href='#'>Gadgets</a></li>
              <li><a href='#'>Car Electronic & GP5</a></li>
              <li><a href='#'>Accesories</a></li>
            </ul>
          </div>
        </div>
        <div className='ichiban-ichiba__footer__smblk'>
          <div className='ichiban-ichiba__footer__smblk__head'>
            <h4>Information</h4>
          </div>
          <div className='ichiban-ichiba__footer__smblk__items'>
            <ul>
              <li><a href='#'>Find a Store</a></li>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Contact Us</a></li>
              <li><a href='#'>Delivery Information</a></li>
              <li><a href='#'>Privacy Policy</a></li>
              <li><a href='#'>Terms & Conditions</a></li>
              <li><a href='#'>Gift Cards</a></li>
            </ul>
          </div>
        </div>
        <div className='ichiban-ichiba__footer__smblk'>
          <div className='ichiban-ichiba__footer__smblk__head'>
            <h4>Customer Care</h4>
          </div>
          <div className='ichiban-ichiba__footer__smblk__items'>
            <ul>
              <li><a href='#'>My Account</a></li>
              <li><a href='#'>Order History</a></li>
              <li><a href='#'>Wish List</a></li>
              <li><a href='#'>Customer Service</a></li>
              <li><a href='#'>Returns / Exchange</a></li>
              <li><a href='#'>FAQs</a></li>
              <li><a href='#'>Product Support</a></li>
            </ul>
          </div>
        </div>
        <div className='ichiban-ichiba__footer__lgblk'>
          <div className='ichiban-ichiba__footer__lgblk__subscribe-form'>
            <h3>Sign Up to <br></br><strong>Newsletter</strong></h3>
            <p>Subscribe our newsletter gor get <br></br> notification about information discount.</p>
            <input type="text" placeholder='Your Email address'></input>
            <button>Subscribe</button>
          </div>
          <div className='ichiban-ichiba__footer__lgblk__in-touch'>
            <strong>GET IN TOUCH !</strong>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
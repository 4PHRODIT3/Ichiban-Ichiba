import React from 'react'
import './styles.css'
import { sc1, sc2, sc3 } from '../../img';

const ShoppingCartMain = () => {
  return (
      <div className='ichiban-ichiba__shopping-cart-main'>
        <div className='ichiban-ichiba__shopping-cart-main__container'>
          <div className='ichiban-ichiba__shopping-cart-main__row'>
            <div className='ichiban-ichiba__shopping-cart-main__col'>
              <div className='ichiban-ichiba__shopping-cart-main__responsive'>
                <table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>
                        <i className='fa-solid fa-xmark'></i>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className='ichiban-ichiba__shopping-cart-main__table__product-thumb'>
                          <a href="#">
                            <img src={sc1} alt="Mac Book" />
                          </a>
                        </div>
                      </td>
                      <td>
                        <div>
                          <h5>
                            <a href="#">Apple The New MacBook Retina</a>
                          </h5>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>$460.00</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <a href="#"></a>
                          <input type="text" />
                          <a href="#"></a>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>$460.00</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <a href="#">
                          <i className='fa-solid fa-xmark'></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='ichiban-ichiba__shopping-cart-main__table__product-thumb'>
                          <a href="#">
                            <img src="" alt="Mac Book" />
                          </a>
                        </div>
                      </td>
                      <td>
                        <div>
                          <h5>
                            <a href="#">Apple The New MacBook Retina</a>
                          </h5>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>$460.00</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <a href="#"></a>
                          <input type="text" />
                          <a href="#"></a>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>$460.00</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <a href="#">
                          <i className='fa-solid fa-xmark'></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='ichiban-ichiba__shopping-cart-main__table__product-thumb'>
                          <a href="#">
                            <img src="" alt="Mac Book" />
                          </a>
                        </div>
                      </td>
                      <td>
                        <div>
                          <h5>
                            <a href="#">Apple The New MacBook Retina</a>
                          </h5>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>$460.00</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <a href="#"></a>
                          <input type="text" />
                          <a href="#"></a>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>$460.00</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <a href="#">
                          <i className='fa-solid fa-xmark'></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ShoppingCartMain
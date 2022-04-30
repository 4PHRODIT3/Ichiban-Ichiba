import React, { useState } from 'react';
import './styles.css';

const COUNTRY = ["United States", "China", "Canada"];
const STATE = ["United States", "China", "Canada"];
const ZIP = ["United States", "China", "Canada"];

const ShoppingCartOptions = () => {
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    return (
      <div className='ichiban-ichiba__shopping-cart-options'>
          <div className='ichiban-ichiba__shopping-cart-options__layout'>
              <div className='ichiban-ichiba__shopping-cart-options__tax'>
                  <h5>Estimate Shipping and Tax</h5>
                  <div className='ichiban-ichiba__shopping-cart-options__tax-inner'>
                      <p>Enter your destination to get shipping & tax</p>
                      <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor='country'>Country*:</label>
                                </td>
                                <td>
                                    <select value={country} onChange={(e) => {
                                        setCountry(e.target.value)
                                    }}>
                                        <option>Select options</option>
                                        {COUNTRY.map((country) => (
                                            <option key={country} value={country}>{country}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='state'>State / Province*:</label>
                                </td>
                                <td>
                                    <select value={state} onChange={(e) => {
                                        setState(e.target.value)
                                    }}>
                                        <option>Select options</option>
                                        {STATE.map((state) => (
                                            <option key={state} value={state}>{state}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor='zip'>Zip / Postal Code*:</label>
                                </td>
                                <td>
                                    <select value={zip} onChange={(e) => {
                                        setZip(e.target.value)
                                    }}>
                                        <option>Select options</option>
                                        {ZIP.map((zip) => (
                                            <option key={zip} value={zip}>{zip}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                      </table>
                      <button>Get a Quocte</button>
                  </div>
              </div>
              <div className='ichiban-ichiba__shopping-cart-options__discount-code'>
                  <div className=''>
                      <h5>Discount Codes</h5>
                  </div>
                  <div>
                      <p>Enter your coupon if you have one</p>
                      <input type='text'></input>
                      <button>Apply</button>
                  </div>
              </div>
              <div>
                  <div>
                      <h5>Cart Total</h5>
                  </div>
                  <div>
                      <table>
                          <tbody>
                              <tr>
                                  <td><label>Sub Total:</label></td>
                                  <td><span>$460.00</span></td>
                              </tr>
                              <tr>
                                  <td><label>Grand Total:</label></td>
                                  <td><span>$460.00</span></td>
                              </tr>
                          </tbody>
                      </table>
                      <div>
                          <div>
                              <a href="#">Checkout with multiple address</a>
                          </div>
                          <div>
                              <button>Proceed to Checkout</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default ShoppingCartOptions
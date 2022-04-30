import React from 'react'
import './styles.css'

const ShoppingCartSteps = () => {
  return (
      <div className='ichiban-ichiba__shoppingcartsteps'>
          <div className='ichiban-ichiba__shoppingcartsteps__container'>
              <div className='ichiban-ichiba__shoppingcartsteps__flex'>
                <div className='ichiban-ichiba__shoppingcartsteps__flex-basis'>
                    <div className='ichiban-ichiba__shoppingcartsteps__layout'>
                        <ul>
                            <li>
                                <div>
                                    <span className='ichiban-ichiba__shoppingcartsteps__step'>01</span>
                                    <span className='ichiban-ichiba__shoppingcartsteps__step-text'>Shopping Cart</span>
                                </div>

                            </li>
                            <li>
                                <div>
                                    <span className='ichiban-ichiba__shoppingcartsteps__step'>02</span>
                                    <span className='ichiban-ichiba__shoppingcartsteps__step-text'>Checkout</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>03</span>
                                    <span>Order Completed</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
              </div>
          </div>
      </div>
  )
}

export default ShoppingCartSteps
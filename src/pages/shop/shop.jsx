import React from 'react'
import './shop.css'
import { PRODUCTS } from '../../product'
import { Product } from './product'

export const Shop = () => {
  return (
    <div className='shop' >
      <div className="shop-title">
        <h1>Bazaar</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product)=> <Product data={product} /> )}
      </div>
    </div>
  )
}

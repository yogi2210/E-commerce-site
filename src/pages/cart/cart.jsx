import React, { useContext }  from 'react'
import { PRODUCTS } from '../../product'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from "./cart-item";
import './cart.css'


export const Cart = () => {
  const { cartItem } = useContext(ShopContext)
  return (
    <div className='cart' >
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart-items">
        { PRODUCTS.map((product) =>  {
          if(cartItem[product.id] !== 0){
            return <CartItem data={product} />
          }
        })}
        
      </div>
    </div>
  )
}

import React, { useContext }  from 'react'
import { PRODUCTS } from '../../product'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from "./cart-item";
import './cart.css'
import { useNavigate } from 'react-router-dom';


export const Cart = () => {
  const { cartItem, getTotalCartAmount } = useContext(ShopContext)
  const navigate = useNavigate()
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
      {getTotalCartAmount() ? 
      <div className="checkout">
        <p>Subtotal: {getTotalCartAmount()} </p>
        <button className='checkout-btn' onClick={ ()  => navigate('/') }>Continue Shopping</button>
        <button className='checkout-btn' >Checkout</button>
      </div>
      :<>
      <h1>your cart is empty</h1>
      <button className='checkout-btn' onClick={ ()  => navigate('/') }>Buy Something</button>
      </>
      }
    </div>
  )
}

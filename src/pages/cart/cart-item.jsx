import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'


export const CartItem = (props) => {
    const { id, productName, productImage, price } = props.data
    const { addToCart, cartItem, removeFromCart, updateCartItemCount } = useContext(ShopContext)

  return (
    <div className='cart-item'>
        <img src={productImage} alt="" />
        <div className="description">
            <p><b>{productName}</b></p>
            <p> &#8377; {price} </p>
            <div className="count-handler">
                <button onClick={()=> removeFromCart(id)} > - </button>
                <input  value={cartItem[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}   />
                <button onClick={()=> addToCart(id)} > + </button>
            </div>
        </div>
    </div>
  )
}

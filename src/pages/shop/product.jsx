import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export const Product = (props) => {
    const { id, productName, productImage, price } = props.data
    const { addToCart, cartItem } = useContext(ShopContext)

    const cartItemAmount = cartItem[id]

  return (
    <div className="product">
        <img src={productImage} alt="" />
        <div className="description">
            <p><b>{productName}</b></p>
            <p> &#8377; {price} </p>
        </div>
        <button 
        className="add-to-cart-btn" 
        onClick={()=> addToCart(id) }
        >
            Add To Cart { cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
    </div>
  )
}

import React from 'react'

export const Product = (props) => {
    const { id, productName, productImage, price } = props.data
  return (
    <div className="product">
        <img src={productImage}  />
        <div className="description">
            <p><b>{productName}</b></p>
            <p> &#8377; {price} </p>
        </div>
        <div className="add-to-cart-btn">Add To Cart</div>
    </div>
  )
}

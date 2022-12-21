import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../product'

export const ShopContext = createContext(null)

const getDeafultCart = () =>{
    let cart = {}
    for( let i = 1; i < PRODUCTS.length + 1; i++ ){
        cart[i] = 0
    }
    return cart
}

export const ShopContextProvider = (props) => {
    const [ cartItem, setCartItem ] = useState(getDeafultCart())

    const addToCart = (itemId) =>{
        setCartItem((prev) => ({...prev, [itemId] : prev[itemId] + 1 }))
    }
    
    const removeFromCart = (itemId) =>{
        setCartItem((prev) => ({...prev, [itemId] : prev[itemId] - 1 }))
    }

    const updateCartItemCount = (newAmount, itemId) =>{
        setCartItem((prev)=>({...prev, [itemId] : newAmount}))
    }


    const contextValue = {cartItem, addToCart, removeFromCart, updateCartItemCount }
    

  return (
    <ShopContext.Provider value={contextValue} > {props.children} </ShopContext.Provider>
  )
}

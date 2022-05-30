import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget() {
    let number = 0;

  return (
    
    <button><FaShoppingCart></FaShoppingCart>{number}</button>
  )
}

export default CartWidget
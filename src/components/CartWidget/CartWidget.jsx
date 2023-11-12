import React from 'react'
import {PiShoppingCartBold} from 'react-icons/pi';


const CartWidget = ({itemCount}) => {
  return (
    <div className="cart-widget">
        <PiShoppingCartBold size={30}></PiShoppingCartBold>
        <span className='itemCount'>{itemCount}</span>
    </div>
  )
}

export default CartWidget
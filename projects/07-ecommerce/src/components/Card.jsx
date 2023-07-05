import React, { useId } from 'react'
import {
  CartIcon,
  ClearCartIcon,
} from './icons'

import '../css/Cart.css'
import { useCart } from '../hook/useCart'
import { CartItem } from './CartItem'

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        {<CartIcon />}
      </label>
      <input
        type="checkbox"
        name={cartCheckboxId}
        id={cartCheckboxId}
        hidden
      />

      <aside className='cart'>
        <ul>
          {cart.map((product) => {
            return <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          })}
        </ul>
        <button onClick={() => clearCart()}>{<ClearCartIcon />}</button>
      </aside>
    </>
  )
}

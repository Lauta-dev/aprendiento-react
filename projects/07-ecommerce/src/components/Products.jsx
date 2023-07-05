import { AddToCartIcon, RemoveFromCartIcon } from './icons.jsx'
import '../css/Product.css'
import React from 'react'
import { useCart } from '../hook/useCart.js'

export function Products({ products }) {
  const { addToCart, cart, removeFromCart } = useCart()
  const checkProduct = product => {
    return cart.some(({ id }) => id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.map((data) => {
          const isProductCart = checkProduct(data)

          function addAndRemoveProductFromCart() {
            return isProductCart
              ? removeFromCart(data)
              : addToCart(data)
          }
          function changeIcons() {
            return isProductCart
              ? RemoveFromCartIcon
              : AddToCartIcon
          }

          return (
            <li key={data.id}>
              <img src={data.thumbnail} alt={data.title} />

              <div>
                <strong>{data.title}</strong> - ${data.price}
              </div>

              <div>
                <button style={isProductCart ? { backgroundColor: 'red' } : { backgroundColor: 'black' }
                }
                  onClick={addAndRemoveProductFromCart}>
                  {changeIcons}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

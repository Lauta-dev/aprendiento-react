import React from "react"

export function CartItem({ thumbnail, title, quantity, price, addToCart }) {
  console.log(quantity)
  return (
    <li>
      <img
        src={thumbnail}
        alt={`Imagen sobre ${title}`}
        width='200px'
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
        <button onClick={() => quantity - 1}>-</button>
      </footer>
    </li>
  )
}
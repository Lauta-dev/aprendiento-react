import { useId } from 'react'
import { ClearCartIcon, CartIcon } from '../../icon'
import { useCart } from '../../hook/useCart'

export const CartItem = ({ thumbnail, title, price, quantity, addTocart: addToCart }) => (
  <li>
    <img src={thumbnail} />
    <div>
      <strong>{title}</strong> - ${price}
      <br />
      <br />
      { quantity > 1 ? <strong>Total price {price * quantity}</strong> : null}
      <br />
    </div>
    <footer>
      <br />
      <small>{quantity}</small>
      <br />
      <button onClick={addToCart}>
        +
      </button>
    </footer>
  </li>
)

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, cleanCart, addToCart } = useCart()

  return (
    <>
      <label htmlFor={cartCheckboxId} className='cart-button'>
        <CartIcon />
      </label>
        <input type="checkbox" name={cartCheckboxId} id={cartCheckboxId} hidden />

        <aside className='cart'>
          <ul>
            {cart.map(product => (
              <CartItem key={product.id} addTocart={() => addToCart(product)} {...product} />
            ))}
          </ul>

          <button onClick={() => cleanCart()}>
            <ClearCartIcon />
          </button>
        </aside>
    </>
  )
}

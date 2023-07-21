import { useContext } from 'react'
import { CartContext } from '../context/cart'

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('No se puede acceder a useCart')
  }

  // Para mas facilidad, desectructure el context
  const { addToCart, cleanCart, cart, removeFromCart } = context
  return { addToCart, cleanCart, cart, removeFromCart }
}

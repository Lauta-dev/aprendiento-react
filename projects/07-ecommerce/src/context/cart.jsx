import { createContext, useState } from 'react'

// 1 - Crear el contexto
export const CartContext = createContext()

// 2 - Crear el provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  function addToCart(product) {
    const productInCartIndex = cart.findIndex(i => i.id === product.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    setCart(prev => ([
      ...prev, { ...product, quantity: 1 }
    ]))
  }

  function clearCart() {
    return setCart([])
  }

  function removeFromCart(product) {
    return setCart(prev => prev.filter(({ id }) => id !== product.id))
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart,
      removeFromCart
    }}>{children}</CartContext.Provider>
  )
}


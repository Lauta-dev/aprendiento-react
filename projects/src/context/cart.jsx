import { createContext } from 'react'
import { useCartReducer } from '../reducer/hook/useCart'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const { state, addToCart, removeFromCart, cleanCart } = useCartReducer()

  /*
  const [cart, setCart] = useState([])

  const addToCart = product => {
    // Checkear si el producto esta en el carrito
    const productCartIndex = cart.findIndex(item => item.id === product.id)

    // Producto no es en el carrito
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }
  */

  /**
   * @returns Un Array vacio

  const cleanCart = () => setCart([])
*/
  /**
   *
   * @param {Array} product Este es el array de productos
   * @returns Un nuevo Array

  const removeFromCart = product => setCart(prevState => prevState.filter(item => item.id !== product.id))
   */

  return (
      <CartContext.Provider value={{
        cart: state,
        addToCart,
        cleanCart,
        removeFromCart
      }}>
        {children}
      </CartContext.Provider>
  )
}

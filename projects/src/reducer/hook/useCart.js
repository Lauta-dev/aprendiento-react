import { useReducer } from "react"
import { CART_REDUCER_TYPES } from "../TYPES/CART_REDUCER_TYPES"
import { inicialState, reducer } from "../cartState"

export const useCartReducer = () => {
  // uso de useReducer
  const [state, dispatch] = useReducer(reducer, inicialState)

  const addToCart = (product) => dispatch({
    type: CART_REDUCER_TYPES.ADD_TO_CART,
    payload: product
  })

  const removeFromCart = (product) => dispatch({
    type: CART_REDUCER_TYPES.REMOVE_TO_CART,
    payload: product
  })

  const cleanCart = () => dispatch({
    type: CART_REDUCER_TYPES.CLEAN_CART
  })

  return { state, addToCart, removeFromCart, cleanCart }
}

import { CART_REDUCER_TYPES } from "./TYPES/CART_REDUCER_TYPES"

/* useReducer
* este resize una funcion con el estado actual y la accion que debe hacer, devulve un nuevo estado.
*/
// el estado iniciar puede ser un objeto por combeniencia pero puede ser cualquier cosa
export const inicialState = []

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case CART_REDUCER_TYPES.ADD_TO_CART: {
      const { id } = actionPayload
      const productCartIndex = state.findIndex(item => item.id === id)

      if (productCartIndex >= 0) {
        // creamos una copia profunda de cart
        const newCart = structuredClone(state)
        newCart[productCartIndex].quantity += 1
        return newCart
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
    }
    case CART_REDUCER_TYPES.REMOVE_TO_CART: {
      const { id } = actionPayload
      return state.filter(item => item.id === id)
    }
    case CART_REDUCER_TYPES.CLEAN_CART: {
      return inicialState
    }
  }

  return state
}

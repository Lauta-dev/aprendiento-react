export const resetGameInLocalStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}

export const saveGameInLocalStorage = ({ newBoart, newTurn }) => {
  window.localStorage.setItem('board', JSON.stringify(newBoart))
  window.localStorage.setItem('turn', newTurn)
}

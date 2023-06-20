// Casillas del tablero - Cuadrado del tablero
export const Square = ({ children, isSelected, updateBoard, index }) => {
  const square = `square ${isSelected ? 'is-selected' : ''}`

  const handeClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handeClick} className={square}>
      {children}
    </div>
  )
}

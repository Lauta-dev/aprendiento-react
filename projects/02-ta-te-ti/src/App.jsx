import { useState } from 'react'

// Contante que tiene los turno
const TURN = { x: "x", o: "o" };


// Casillas del tablero - Cuadrado del tablero
const Square = ({ children, isSelected, updateBoard, index }) => {
  const square = `square ${isSelected ? 'is-selected' : ''}`

  const handeClick = () => {
    updateBoard()
  }

  return (
    <div onClick={handeClick} className={square}>
      {children}
    </div>
  )
}
function App() {
  // Tablero
  // Usar el hook useState para el estado inicial de la app
  const [board, setBoard] = useState(Array(9).fill(null));

  // Estado para saber de quien es el turno
  const [turn, setTurn] = useState(TURN.x)


  const updateBoard = () => {

  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURN.x}> {TURN.x} </Square>
        <Square isSelected={turn === TURN.o}> {TURN.o} </Square>
      </section>
    </main>
  )
}

export default App

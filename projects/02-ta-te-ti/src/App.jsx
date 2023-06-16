import { useState } from "react"
import "./index.css"

const TURN = { x: "X", o: "O" }

// # El Square sera las casillas del tablero
// Mostrar la "X"/"O" en el tablero, actualizar tablero, saber que indice es
const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' :  ''}`

  const handelClick = () => updateBoard(index)

  return (
    <div onClick={handelClick}className={className}>
      {children}
    </div>
  )
}

export const App = () => {
  const [ board, setBoard ] = useState(Array(9).fill(null))
  // Estado del turno
  const [ turn, setTurn ] = useState(TURN.x)

  const updateBoard = (index) => {
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard)

    const newTurn  = turn === TURN.x ? TURN.o : TURN.x
    setTurn(newTurn)
  }

  return (
  <main className="board">
    <h1>Ta Te Ti</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square 
                key={index} 
                index={index}
                updateBoard={updateBoard}>
              {index}
            </Square>
          )
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURN.x}>
          {TURN.x}
        </Square>
        
        <Square isSelected={turn === TURN.o}>
          {TURN.o}
        </Square>
      </section>
  </main>
  )
}

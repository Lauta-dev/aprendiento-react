import { useState } from 'react'
import { Square } from './components/square';
import { TURN } from './constant';
import { chechWinner } from './logic/board';
import { WinnerModal } from './components/winnerModal';
import { Board } from './components/board';

function App() {
  // Tablero
  // Usar el hook useState para el estado inicial de la app
  const [board, setBoard] = useState(Array(9).fill(null));

  // Estado para saber de quien es el turno
  const [turn, setTurn] = useState(TURN.x)

  // Estado para saber quien a ganado
  // NULL -> es si no hay ganador
  // false -> es si hay un empate
  const [win, setWin] = useState(null)

  const resetGame = () => {
    /* for(let i = 0; i <= board.length; i++) {
       if (board[i] === null) return
       setBoard(Array(9).fill(null))
       setTurn(TURN.x)
       setWin(null)
     }*/

     // eevitar que el tablero se renderize de nuevo cuando no hay elementos en el
    board.every((e) => {
      if (e !== null) {
        setBoard(Array(9).fill(null))
        setTurn(TURN.x)
        setWin(null)
      }
    })
  }

  // Cambiar los turnos
  const updateBoard = (index) => {
    // No actualiza el tablero si una casilla esta ocupada o algien a ganado
    if (board[index] || win) return

    const newBoart = [...board];
    newBoart[index] = turn
    setBoard(newBoart)

    // Cambiar el turno
    const newTurn = turn === TURN.x ? TURN.o : TURN.x;
    setTurn(newTurn)

    // Saber si hay un ganador
    const newWinner = chechWinner(newBoart);
    if (newWinner) {
      // setWin es una fn asincrona asi que no interfiere con lo que despues encuentre
      // Esta es la razon por la que el console.log() devuelve null
      setWin(newWinner)

      // win devuelve null porque aun no tiene el valor
      //console.log(`Gano el: ${win}`)
    } else if (chechWinner(newBoart)) {
      setWin(false) // si hay empate
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Resetear el juego</button>
      <section className='game'>
        <Board board={board} updateBoard={updateBoard}></Board>
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURN.x}> {TURN.x} </Square>
        <Square isSelected={turn === TURN.o}> {TURN.o} </Square>
      </section>
      <WinnerModal win={win} resetGame={resetGame}></WinnerModal>
    </main>
  )
}

export default App

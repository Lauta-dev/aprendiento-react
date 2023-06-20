import { Square } from "./square";

export const WinnerModal = ({win, resetGame}) => {
  if (win === null) return null

  const winnerText = win === false ? "Empate" : "Gana";
  const winnerHeader = win && <Square> {win} </Square>


  return (
    <section className='winner'>
      <div className="text">
        <h2> {winnerText} </h2>

        <header>{win && <Square> {win} </Square>}</header>

        <footer>
          <button onClick={resetGame}> Empezar de nuevo </button>
        </footer>

      </div>
    </section>
  )
}
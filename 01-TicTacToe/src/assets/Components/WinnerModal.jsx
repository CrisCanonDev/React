import { Square } from "./Square"

export function WinnerModal({ winner, resetGame }) {
  const winnerText = winner === false ? 'Tie' : 'Win'
  if (winner == null) return null
  return (
    winner != null && (
      <section className='winner'>
        <div className='text'>
          <h3>{winnerText}</h3>

          <header className='win'>
            {winner && <Square>{winner}</Square>}
          </header>

          <footer>
            <button onClick={resetGame}>Start again</button>
          </footer>
        </div>
      </section>
    )

  )
}
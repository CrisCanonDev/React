import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
//Constant of players' turn
const TURNS = {
  X: 'x',
  O: 'o'
}
const WINNER_POSITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]


//Square component  
const Square = ({ children, selected, updateBoard, index }) => {

  const className = `square ${selected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
//Initializing every TicTacToe position empty
const board = Array(9).fill(null)




function App() {
  const [turn, setTurn] = useState(TURNS.X)
  const [board, setBoard] = useState(Array(9).fill(null))
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const winnerPosition of WINNER_POSITIONS) {
      const [a, b, c] = winnerPosition
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[b] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null //No winner 
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square != null)
  }

  const updateBoard = (index) => {

    if (board[index] || winner) return //Not update position if is not void or winner

    const newBoard = [...board] //copy of board. Props and state are inmutable (lead to state discprancies), not modifiable 
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X //Change turn
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    }
    else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }
  return (
    <main className='board'>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard} //Function passed to execute it when is clicked, not when rendered
              >

                {board[index]}
              </Square>
            )

          })
        }
      </section>
      <section className='turn'>
        <Square selected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square selected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      {
        winner != null && (
          <section className='winner'>
            <div className='text'>
              <h3>
                {
                  winner === false ? "Tie" : "Win"
                }
              </h3>

              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Start again</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App

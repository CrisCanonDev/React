import { useState } from 'react'
import './App.css'
import './index.css'

import { Square } from './assets/Components/Square.jsx'
import { TURNS } from './constants.js'
import { WinnerModal } from './assets/Components/WinnerModal.jsx'
import { checkWinner, checkEndGame } from './boardLogic.js'


function App() {
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board')
    return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem('turn')
    return turnFromLocalStorage ?? TURNS.X
  })



  const [winner, setWinner] = useState(null)



  const resetGame = () => {
    setBoard((Array(9).fill(null)))
    setTurn(TURNS.X)
    setWinner(null)
  }



  const updateBoard = (index) => {

    if (board[index] || winner) return //Not update position if is not void or winner

    const newBoard = [...board] //copy of board. Props and state are inmutable (lead to state discprancies), not modifiable 
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X //Change turn
    setTurn(newTurn);

    //Save game
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

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
      <h1 >TIC TAC TOE</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard} //Function passed to execute it when is clicked, not when rendered
              >
                {square}
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

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App

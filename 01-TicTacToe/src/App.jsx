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
//Square component  
const Square = ({ children, selected, updateBoard, index }) => {

  const className = `square ${selected ? 'is-selected' : ''}`
  const handleClick = () =>{
    updateBoard()
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
  const updateBoard =() =>{
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn);
    
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
                updateBoard={updateBoard}
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
    </main>
  )
}

export default App

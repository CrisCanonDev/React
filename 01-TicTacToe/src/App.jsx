import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

const TURNS = {
  X: 'x',
  Y: 'y'
}
//Square component  
const Square = ({ children, updateBoard, index }) => {
  return (
    <div className='square'>
      {children}
    </div>
  )
}

const board = Array(9).fill(null)

function App() {



  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}>
              </Square>
            )

          })
        }
      </section>

    </main>
  )
}

export default App

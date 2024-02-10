import { useState } from 'react'
import './App.css'

const Square = () => {
  return (<button >1</button>)
}
export function App() {
  const [rows, setRows] = useState(Array(7).fill(null))
  const [board, setBoard] = useState(Array(4).fill(rows))
  return (
    board.map((row, rowIndex) => {
      return (
        row.map((value, colIndex) => {
          return (
            <Square key={rowIndex + " " + colIndex}></Square>
          )
        })
      )
    })

  )
}
export default App

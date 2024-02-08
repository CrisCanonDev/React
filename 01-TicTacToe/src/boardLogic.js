import { WINNER_POSITIONS } from "./constants"

export const checkWinner = (boardToCheck) => {
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

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square != null)
}
import { WINNER_COMBOS } from "../constant"

export const chechWinner = (boardToCheck) => {
  for (const combos of WINNER_COMBOS) {
    const [a, b, c] = combos
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}
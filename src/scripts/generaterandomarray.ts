import { shuffleMatrix } from './shuffle'

export function generateRandomMatrix(): number[][] {
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0],
  ]

  matrix = shuffleMatrix(matrix)

  console.log(matrix)
  return matrix
}

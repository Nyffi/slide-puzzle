import { Coord } from './Coord'
import { generateRandomMatrix } from '@/scripts/generaterandomarray'

export class Matrix {
  private board: number[][]
  private readonly victoryBoard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0],
  ]
  private victoryStatus = false

  constructor() {
    this.board = generateRandomMatrix()
  }

  get() {
    return this.board
  }

  private set(toMatrix: number[][]) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.board[i][j] = toMatrix[i][j]
      }
    }
  }

  setWin() {
    this.set(this.victoryBoard)
    this.victoryStatus = true
  }

  reset() {
    this.board = generateRandomMatrix()
  }

  checkVictory(): boolean {
    if (JSON.stringify(this.board) === JSON.stringify(this.victoryBoard)) {
      return true
    }
    return false
  }

  private setNum(x: number, y: number, num: number) {
    this.board[y][x] = num
  }

  switchValue(from: Coord, to: Coord) {
    const fromVal = this.board[from.x][from.y]
    const toVal = this.board[to.x][to.y]

    if (toVal != null && toVal == 0) {
      this.setNum(to.x, to.y, fromVal)
      this.setNum(from.x, from.y, toVal)
    }
  }
}

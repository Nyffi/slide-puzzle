import type { GridSlice } from '@/interfaces/GridSlice'
import imagePath from '@/assets/city.jpg'
import { shuffleArray } from '@/scripts/shuffle'

export class GameController {
  private grid: GridSlice[]
  private readonly victoryBoard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0],
  ]
  private victoryStatus: boolean

  constructor() {
    this.grid = []
    this.victoryStatus = false
    this.resetGame()
  }

  getGrid(): GridSlice[] {
    return this.grid
  }

  getVictoryStatus(): boolean {
    return this.victoryStatus
  }

  setWin() {
    this.grid.sort((a, b) => {
      if (a.id < b.id) {
        return -1
      }

      if (a.id > b.id) {
        return 1
      }

      return 0
    })

    const aux = this.grid[0]
    this.grid.splice(0, 1)
    this.grid.push(aux)
  }

  resetGame() {
    this.grid = this.generateGameMatrix()
    this.grid = shuffleArray(this.grid)
    this.victoryStatus = false
  }

  generateGameMatrix(): GridSlice[] {
    const sliceSize = 171 // 1024 / 3
    const gridSlices: GridSlice[] = []
    let aux = 1

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const sliceClass = `slice-${row}-${col}`
        const backgroundPosX = -col * sliceSize
        const backgroundPosY = -row * sliceSize

        if (aux === 9) aux = 0

        gridSlices.push({
          class: sliceClass,
          style: {
            backgroundImage: `url('${imagePath}')`,
            backgroundPosition: `${backgroundPosX}px ${backgroundPosY}px`,
            backgroundSize: '512px 512px',
            width: `${sliceSize}px`,
            height: `${sliceSize}px`,
          },
          id: aux,
        })

        aux++
      }
    }

    return gridSlices
  }

  moveNum(id: number) {
    const targetIndex = this.grid.findIndex((item) => item.id === id)
    const zeroIndex = this.grid.findIndex((item) => item.id === 0)
    console.log(id)

    if (id > 8 || id < 1) return
    const isValidPath = this.checkValidMove(targetIndex, zeroIndex)

    if (isValidPath) {
      ;[this.grid[targetIndex], this.grid[zeroIndex]] = [
        this.grid[zeroIndex],
        this.grid[targetIndex],
      ]
    }
  }

  private checkValidMove(targetIndex: number, zeroIndex: number): boolean {
    const gridSize = 3

    if (
      targetIndex === zeroIndex - gridSize ||
      targetIndex === zeroIndex + gridSize ||
      (targetIndex === zeroIndex - 1 && zeroIndex % gridSize !== 0) ||
      (targetIndex === zeroIndex + 1 && zeroIndex % gridSize !== gridSize - 1)
    )
      return true

    return false
  }

  checkVictory() {
    const victoryArray = this.victoryBoard.flat()
    let result = true

    for (let aux = 0; aux < this.grid.length; aux++) {
      if (victoryArray[aux] !== this.grid[aux].id) {
        result = false
        break
      }
    }

    this.victoryStatus = result
  }
}

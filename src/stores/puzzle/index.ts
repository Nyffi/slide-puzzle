import { defineStore } from 'pinia'
import { GameController } from '@/controllers/GameController'

export const useGameStore = defineStore('puzzle', {
  state: () => ({
    game: new GameController(),
  }),
  getters: {},
  actions: {
    getGrid() {
      return this.game.getGrid()
    },

    handleClick(id: number) {
      this.game.moveNum(id)
      this.game.checkVictory()
    },

    getVictoryStatus(): boolean {
      return this.game.getVictoryStatus()
    },

    setWin() {
      this.game.setWin()
      this.game.checkVictory()
    },

    reset() {
      this.game.resetGame()
    },
  },
})

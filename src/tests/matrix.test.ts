import { expect, test } from 'vitest'
import { Matrix } from './../models/Matrix'

test('should check if matrix values is the same of winMatrix', () => {
  const matrix = new Matrix()

  expect(matrix.checkVictory()).toBe(false)
  matrix.setWin()
  expect(matrix.checkVictory()).toBe(true)
})

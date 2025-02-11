import type { GridSlice } from '@/interfaces/GridSlice'

export function piniaToSlice(matrix: number[][], slices: GridSlice[]): GridSlice[] {
  const array = matrix.flat()
  const newSlices: GridSlice[] = []

  for (const num of array) {
    newSlices.push(
      slices.find((x) => x.id === num) ??
        (() => {
          throw new Error('Element not found')
        })(),
    )
  }

  return newSlices
}

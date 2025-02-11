export function listToMatrix<T>(list: T[], size: number): T[][] {
  const matrix = []
  let i, k

  for (i = 0, k = -1; i < list.length; i++) {
    if (i % size === 0) {
      k++
      matrix[k] = []
    }

    matrix[k].push(list[i])
  }

  return matrix
}

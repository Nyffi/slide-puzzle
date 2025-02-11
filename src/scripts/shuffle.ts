export function shuffleArray<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function shuffleMatrix<T>(matrix: T[][]): T[][] {
  const flattened = matrix.flat()

  for (let i = flattened.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[flattened[i], flattened[j]] = [flattened[j], flattened[i]]
  }

  const rows = matrix.length
  const cols = matrix[0].length
  const reshapedMatrix: T[][] = []
  for (let i = 0; i < rows; i++) {
    reshapedMatrix.push(flattened.slice(i * cols, i * cols + cols))
  }

  return reshapedMatrix
}

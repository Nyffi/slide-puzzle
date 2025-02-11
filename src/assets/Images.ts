let IMAGES = []

const image: HTMLImageElement = new Image()
image.setAttribute('crossOrigin', 'anonymous')
image.onload = cutImageUp
image.src = 'twin.jpg'

const squareSize: number = 340

function cutImageUp() {
  const imagePieces = []
  for (let x = 0; x < 3; ++x) {
    for (let y = 0; y < 3; ++y) {
      const canvas = document.createElement('canvas')
      canvas.width = squareSize
      canvas.height = squareSize
      const context = canvas.getContext('2d')
      context?.drawImage(
        image,
        x * squareSize,
        y * squareSize,
        squareSize,
        squareSize,
        0,
        0,
        canvas.width,
        canvas.height,
      )
      imagePieces.push(canvas.toDataURL())
    }
  }

  IMAGES = imagePieces
}

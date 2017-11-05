export const resetGrid = () => {
  const res = []
  for (let i = 0; i < 17; i++) {
    const row = []
    for (let j = 0; j < 10; j++) {
      row.push( 0 )
    }
    res.push(row)
  }
  return res
}

export const rotateMatrix = (original) => {
  const matrix = [...original]
  const n = matrix.length
  for (let layer = 0; layer < n; layer++) {
    let start = layer
    let stop = n - 1 - layer

    for (let col = start; col < stop; col++) {
      const top = matrix[layer][col]
      const left = matrix[n-1-col][layer]
      const right = matrix[col][n-1-layer]
      const bottom = matrix[n-1-layer][n-1-col]

      matrix[layer][col] = left
      matrix[n-1-col][layer] = bottom
      matrix[col][n-1-layer] = top
      matrix[n-1-layer][n-1-col] = right
    }
  }
  return matrix
}

export const addToGrid = (shape, position, grid) => {
  const newGrid = [...grid]
  for (let row = shape.length-1; row >= 0; row--) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col] !== 0) {
        if (row + position[0] < 0 || row + position[0] >= grid.length) {
          return newGrid
        }
        newGrid[row + position[0]][col + position[1]] = shape[row][col]
      }
    }
  }
  return newGrid
}

export const clearLines = (originalGrid) => {
  const grid = [...originalGrid]
  let score = 0
  for (let row = 0; row < originalGrid.length; row++) {
    let toClear = true
    for (let col = 0; col < originalGrid[row].length; col++) {
      if (originalGrid[row][col] === 0) {
        toClear = false
        break
      }
    }
    if (toClear) {
      score += 1
      grid.splice(row, 1)
      grid.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    }
  }

  if (score % 4 === 0) {
    score = (score / 4) * 1200
  }
  else if (score % 3 === 0) {
    score = (score / 3) * 300
  }
  else if (score % 2 === 0) {
    score = (score / 2) * 100
  }
  else {
    score = score * 40
  }

  console.log({score})
  return {grid, score}
}
export const resetGrid = () => {
  const res = []
  for (let i = 0; i < 20; i++) {
    const row = []
    for (let j = 0; j < 10; j++) {
      if (i === 19) {
        row.push(1)
      }
      else {
        row.push( 0 )
      }
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
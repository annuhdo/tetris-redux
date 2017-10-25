export function move(state = [], action) {
  switch (action.type) {
    case 'DROP':
      return [state[0] + 1, state[1]]
    case 'RIGHT':
      return [state[0], Math.min(9, state[1] + 1)]
    case 'LEFT':
      return [state[0], Math.max(1, state[1] - 1)]
    default:
      return state
  }
  return state
}

export function rotate(state = [], action) {
  switch (action.type) {
    case 'ROTATE':
      const newMatrix = [...state]
      rotateMatrix(newMatrix)
      return newMatrix
    default:
      return state
  }
  return state
}

function rotateMatrix(matrix) {
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
}
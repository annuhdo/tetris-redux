export const checkCollisions = (shape, position, grid) => {
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col] !== 0) {
        if (row + position[0] >= grid.length) {
          return true
        }
        if (row + position[0] < 0) {
          return false
        }
        if (grid[row + position[0]] !== 0 &&
        grid[row + position[0]][col + position[1]] !== 0) {
          return true
        }
      }
    }
  }
  return false
}

export const outOfBoundsPosition = (shape, position, grid) => {
  let newPosition = position
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col] !== 0) {
        if (col + position[1] >= grid[row].length) {
          const diff = Math.abs(grid[row].length - 1 - (col + position[1]))
          newPosition[1] = newPosition[1] - diff
        }
        if (col + position[1] < 0) {
          newPosition[1] = newPosition[1] + Math.abs(col + position[1])
        }
      }
    }
  }
  return newPosition
}

export const dropPosition = (shape, position, grid) => {
  const newPosition = [...position]

  while (!checkCollisions(shape, newPosition, grid)) {
    newPosition[0] += 1
  }

  newPosition[0] -= 1

  return newPosition
}
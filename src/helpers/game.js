export const checkCollisions = (shape, position, grid) => {
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (row + position[0] >= grid.length) {
        return true
      }
      if (row + position[0] < 0) {
        return false
      }
      if (shape[row][col] !== 0) {
        if (grid[row + position[0]] !== 0 &&
        grid[row + position[0]][col + position[1]] !== 0) {
          return true
        }
      }
    }
  }
  return false
}
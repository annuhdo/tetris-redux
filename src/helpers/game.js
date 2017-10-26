export const checkCollisions = (shape, position, landed) => {
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col] !== 0) {
        if (row + position[0] >= landed.length) {
          return true
        }
        if (landed[row + position[0]] !== 0 &&
        landed[row + position[0]][col + position[1]] !== 0) {
          return true
        }
      }
    }
  }
  return false
}
export function append(color, row = 1, col = 10) {
  return {
    type: 'TICK',
    row,
    col,
    color
  }
}

export function resetGrid() {
  return {
    type: 'START'
  }
}
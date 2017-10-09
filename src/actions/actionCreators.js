export function append(row, col, color) {
  return {
    type: 'TICK',
    row,
    col,
    color
  }
}
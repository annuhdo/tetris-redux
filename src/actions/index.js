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

export function drop() {
  return {
    type: 'DROP'
  }
}

export function moveRight() {
  return {
    type: 'RIGHT'
  }
}

export function moveLeft() {
  return {
    type: 'LEFT'
  }
}

export function rotate() {
  return {
    type: 'ROTATE'
  }
}
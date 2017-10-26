export function start() {
  return {
    type: 'START_GAME'
  }
}

export function stop() {
  return {
    type: 'STOP_GAME'
  }
}

export function drop() {
  return {
    type: 'DROP'
  }
}

export function moveRight() {
  return {
    type: 'SHIFT',
    payload: 1
  }
}

export function moveLeft() {
  return {
    type: 'SHIFT',
    payload: -1
  }
}

export function rotate() {
  return {
    type: 'ROTATE'
  }
}
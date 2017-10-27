import { randomShape } from '../components/model'

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

export function getNewShape() {
  const newShape = randomShape()
  console.log({newShape})
  return {
    type: 'NEW_SHAPE',
    shape: newShape
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
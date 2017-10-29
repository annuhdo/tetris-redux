import { Shapes } from '../components/model'

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
  const newShape = new Shapes().getRandom()
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

export function hardDrop() {
  return {
    type: 'HARD_DROP'
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
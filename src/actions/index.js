import { Shapes } from '../components/model'

export function resetGrid() {
  return {
    type: 'RESET_GAME'
  }
}

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

function getNewShape() {
  const newShape = new Shapes().getRandom()
  return {
    type: 'NEW_SHAPE',
    shape: newShape
  }
}

function drop() {
  return {
    type: 'DROP'
  }
}

export function dropTimer() {
  return (dispatch, getState) => {
    if (getState().newShape) {
      dispatch(getNewShape())
    }

    if (getState().gameStatus === 'STOP' || getState().gameStatus === 'GAME_OVER') {
      return
    }

    if (getState().gameStatus === 'START') {
      dispatch(drop())
    }

    setTimeout(() => {
      dispatch(dropTimer())
    }, getState().accelerate ? 150 : 500)
  }
}

export function accelerate() {
  return {
    type: 'ACCELERATE'
  }
}

export function decelerate() {
  return {
    type: 'DECELERATE'
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
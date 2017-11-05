import { Shapes } from '../components/model'

export function resetGrid() {
  return {
    type: 'RESET_GAME'
  }
}

export function start() {
  return (dispatch, getState) => {
    const { gameStatus } = getState()

    if (gameStatus === 'GAME_OVER') {
      return
    }
    
    dispatch({ type: 'START_GAME' })
  }
}

export function stop() {
  return (dispatch, getState) => {
    const { gameStatus } = getState()

    if (gameStatus === 'GAME_OVER') {
      return
    }
    
    dispatch({ type: 'STOP_GAME' })
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
    const { gameStatus, newShape } = getState()

    if (newShape) {
      dispatch(getNewShape())
    }

    if (gameStatus === 'STOP' || gameStatus === 'GAME_OVER') {
      return
    }

    if (gameStatus === 'START') {
      dispatch(drop())
    }

    setTimeout(() => {
      dispatch(dropTimer())
    }, getState().accelerate ? 150 : 500)
  }
}

export function accelerate() {
  return (dispatch, getState) => {
    const { gameStatus, currentShape } = getState()
    if (gameStatus === 'STOP' || gameStatus === 'GAME_OVER') {
      return
    }

    if (currentShape.length === 0) {
      return
    }

    dispatch( { type: 'ACCELERATE' } )
  }
}

export function decelerate() {
  return (dispatch, getState) => {
    const { gameStatus, currentShape } = getState()
    if (gameStatus === 'STOP' || gameStatus === 'GAME_OVER') {
      return
    }

    if (currentShape.length === 0) {
      return
    }

    dispatch( { type: 'DECELERATE' } )
  }
}

export function hardDrop() {
  return (dispatch, getState) => {
    const { gameStatus, currentShape, position } = getState()
    if (gameStatus === 'STOP' || gameStatus === 'GAME_OVER') {
      return
    }

    if (currentShape.length === 0 || position[0] < -1) {
      return
    }

    dispatch({
      type: 'HARD_DROP'
    })
  }
}

export function moveRight() {
  return (dispatch, getState) => {
    const { gameStatus, currentShape, newShape } = getState()
    if (gameStatus === 'STOP' || gameStatus === 'GAME_OVER') {
      return
    }
    
    if (newShape || currentShape.length === 0) {
      return
    }

    dispatch({
      type: 'SHIFT',
      payload: 1
    })
  }
}

export function moveLeft() {
  return (dispatch, getState) => {
    const { gameStatus, currentShape, newShape } = getState()
    if (gameStatus === 'STOP' || gameStatus === 'GAME_OVER') {
      return
    }
    
    if (newShape || currentShape.length === 0) {
      return
    }

    dispatch({
      type: 'SHIFT',
      payload: -1
    })
  }
}

export function rotate() {
  return (dispatch, getState) => {
    const { gameStatus, currentShape } = getState()
    if (gameStatus === 'STOP' || gameStatus === 'GAME_OVER') {
      return
    }

    if (currentShape.length === 0) {
      return
    }
    dispatch({type: 'ROTATE'})
  }
}
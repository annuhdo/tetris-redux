import React from 'react'
import ShapeView from './ShapeView'

const Game = (props) => {
  return (
    <div>
      <ShapeView
        shape={props.currentShape}
        position={props.shadowPosition}
        shadow={true}
        background='#514271'
        borderColor='#7975a7'
      />
      <ShapeView
        shape={props.currentShape}
        position={props.position}
      />
    </div>
  )
}

export default Game
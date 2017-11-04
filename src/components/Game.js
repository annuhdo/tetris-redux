import React, { Component } from 'react'
import ShapeView from './ShapeView'

class Game extends Component {
  render() {
    return (
      <div>
        <ShapeView
          shape={this.props.currentShape}
          position={this.props.shadowPosition}
          shadow={true}
          background='#514271'
          borderColor='#7975a7'
        />
        <ShapeView
          shape={this.props.currentShape}
          position={this.props.position}
        />
      </div>
    )
  }
}

export default Game
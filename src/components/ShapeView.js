import React, { Component } from 'react'
import Square from './Square'
import { Colors } from './model'

class ShapeView extends Component {
  renderSquare(color, borderColor) {
    const res = []
    let i = 1

    const shape = this.props.shape
    const position = this.props.position
    const grid = this.props.grid

    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[0].length; col++) {
        const check = grid || shape[row][col] !== 0
        if (check) {
          const colorMatch = Colors[shape[row][col]]
          res.push(
          <Square
            key={i++}
            row={position[0] + row}
            col={position[1] + col}
            background={colorMatch && colorMatch.background || color}
            borderColor={colorMatch && colorMatch.borderColor || borderColor}
          />)
        }
      }
    }

    return res
  }
  render() {
    return (
      <div>
        {this.renderSquare(this.props.color, this.props.borderColor)}
      </div>
    )
  }
}

export default ShapeView;
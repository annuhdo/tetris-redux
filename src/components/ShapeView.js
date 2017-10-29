import React, { Component } from 'react'
import Square from './Square'
import { Colors } from './model'

class ShapeView extends Component {
  renderSquare(background, borderColor) {
    const res = []
    let i = 1

    const shape = this.props.shape
    const position = this.props.position
    const gridExist = this.props.grid

    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[0].length; col++) {
        const check = gridExist || shape[row][col] !== 0
        if (check) {
          const colorMatch = Colors[shape[row][col]]
          const bg = colorMatch && colorMatch.background || background
          const border = colorMatch && colorMatch.borderColor || borderColor
          res.push(
          <Square
            key={i++}
            row={position[0] + row}
            col={position[1] + col}
            background={bg}
            borderColor={border}
          />)
        }
      }
    }

    return res
  }
  render() {
    return (
      <div>
        {this.renderSquare(this.props.background, this.props.borderColor)}
      </div>
    )
  }
}

export default ShapeView;
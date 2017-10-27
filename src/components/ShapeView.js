import React, { Component } from 'react'
import Square from './Square'

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
        if (grid && shape[row][col] === 1) {
          res.push(
            <Square
              key={i++}
              row={position[0] + row}
              col={position[1] + col}
              color={'#22449d'}
              borderColor={'#17bcff'}
            />)
        }
        else if (check) {
          res.push(
          <Square
            key={i++}
            row={position[0] + row}
            col={position[1] + col}
            color={color}
            borderColor={borderColor}
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
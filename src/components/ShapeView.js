import React, { Component } from 'react'
import Square from './Square'

class ShapeView extends Component {
  renderSquare(color, borderColor) {
    const res = []
    let i = 1

    for (let row = 0; row < this.props.shape.length; row++) {
      for (let col = 0; col < this.props.shape[0].length; col++) {
        if (this.props.shape[row][col] !== 0) {
          res.push(
          <Square
            key={i++}
            row={this.props.position[0] + row}
            col={this.props.position[1] + col}
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
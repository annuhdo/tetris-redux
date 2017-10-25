import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Square from './Square'

class ShapeView extends Component {
  renderSquare() {
    const res = []
    let i = 1

    for (let row = 0; row < this.props.shape.length; row++) {
      for (let col = 0; col < this.props.shape[0].length; col++) {
        if (this.props.shape[row][col] === 1) {
          res.push(
          <Square
            key={i++}
            row={this.props.position[0] + row}
            col={this.props.position[1] + col}
            color='#ba2894'
            borderColor='#ff4ad6' />)
        }
      }
    }

    return res
  }
  render() {
    return (
      <div>
        {this.renderSquare()}
      </div>
    )
  }
}

export default ShapeView;
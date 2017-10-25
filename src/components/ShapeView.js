import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Square from './Square'

class ShapeView extends Component {
  render() {
    return (
      <div>
        {this.props.shape.squares().map((sq, i) =>
          <Square key={i} row={sq.row} col={sq.col} color={sq.color} borderColor='#ff4ad6' />
        )}
      </div>
    )
  }
}

export default ShapeView;
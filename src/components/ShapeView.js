import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Square from './Square'

class ShapeView extends Component {
  render() {
    return (
      <div>
        {this.props.shape.squares().map((sq, i) =>
          <Square key={i} row={sq.row} col={sq.col} color={sq.color} />
        )}
      </div>
    )
  }
}

export default ShapeView;
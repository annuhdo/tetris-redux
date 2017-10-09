import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import styled from 'styled-components'

const SquareUnit = styled.div`
  position: absolute;
  background: ${ props => props.color || 'tomato'};
  width: 25px;
  height: 25px;
  left: ${ props => (props.col - 1) * 25}px;
  top: ${ props => (props.row - 1) * 25}px;
`

class Square extends Component {
  render() {
    return (
      <SquareUnit
        row={this.props.row}
        col={this.props.col}
        color={this.props.color}
      />
    )
  }
}

export default Square;
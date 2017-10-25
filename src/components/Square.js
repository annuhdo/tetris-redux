import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import styled from 'styled-components'

const SquareUnit = styled.div`
  position: absolute;
  background: ${ props => props.color || 'tomato'};
  width: 50px;
  height: 50px;
  left: ${ props => (props.col - 1) * 50}px;
  top: ${ props => (props.row - 1) * 50}px;
  border: 1px solid ${ props => props.borderColor || '#031651' };
  box-sizing: border-box;
`

const Square = (props) => (
  <SquareUnit
    row={props.row}
    col={props.col}
    color={props.color}
    borderColor={props.borderColor}
  />
)


export default Square;
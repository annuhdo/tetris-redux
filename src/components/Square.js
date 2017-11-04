import React from 'react'

import styled from 'styled-components'

const sqSize = 40

const SquareUnit = styled.div`
  position: absolute;
  background: ${ props => props.background || '#2c2a6c'};
  width: ${sqSize}px;
  height: ${sqSize}px;
  border: 1px solid ${ props => props.borderColor || '#031651' };
  box-sizing: border-box;
`

const Square = (props) => (
  <SquareUnit
    row={props.row}
    col={props.col}
    background={props.background}
    borderColor={props.borderColor}
    style={
      {
        left: (props.col) * sqSize,
        top: (props.row) * sqSize,
      }
    }
  />
)


export default Square;
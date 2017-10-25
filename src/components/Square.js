import React from 'react'

import styled from 'styled-components'

const SquareUnit = styled.div`
  position: absolute;
  background: ${ props => props.color || 'tomato'};
  width: 50px;
  height: 50px;
  border: 1px solid ${ props => props.borderColor || '#031651' };
  box-sizing: border-box;
`

const Square = (props) => (
  <SquareUnit
    row={props.row}
    col={props.col}
    color={props.color}
    borderColor={props.borderColor}
    style={
      {
        left: (props.col - 1) * 50,
        top: (props.row - 1) * 50,
      }
    }
  />
)


export default Square;
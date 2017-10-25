import React from 'react'
import Square from './Square'
import styled from 'styled-components'
import Game from './Game'

const GridStyle = styled('div')`
  height: 1000px;
  display: grid;
`

const Board = styled('ul')`
  position: relative;
  display: inline-block;
  margin: auto;
  width: 500px;
  height: 1000px;
`

function renderBlocks(rows, cols) {
  const res = []
  let key = 1
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      res.push(
        <Square key={key++} row={i+1} col={j+1} color='#2c2a6c' borderColor='#031651' />
      )
    }
  }
  return res
}

const Grid = (props) => (
  <GridStyle>
    <Board>
      {renderBlocks(props.rows, props.cols)}
      <Game />
    </Board>
  </GridStyle>
)

export default Grid
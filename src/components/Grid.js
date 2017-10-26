import React from 'react'
import Square from './Square'
import ShapeView from './ShapeView'
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

const Grid = (props) => (
  <GridStyle>
    <Board>
      <ShapeView
        color='#2c2a6c'
        borderColor='#031651'
        shape={props.grid}
        position={[0, 0]}
      />
      {/* {renderBlocks(props.rows, props.cols)} */}
      <Game {...props} />
    </Board>
  </GridStyle>
)

export default Grid
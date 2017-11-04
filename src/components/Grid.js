import React from 'react'
import Square from './Square'
import ShapeView from './ShapeView'
import styled from 'styled-components'
import Game from './Game'

const GridStyle = styled('div')`
  width: 400px;
  height: 680px;
  display: flex;
  position: relative;
  background: linear-gradient(0deg, #302034, #b5223e);
  border-bottom: 1px solid #E15691;
  border-top: 1px solid #E15691;
`

const Board = styled('ul')`
  position: relative;
  display: inline-block;
  margin: auto;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Grid = (props) => (
  <GridStyle>
    <Board>
      <ShapeView
        background='transparent'
        borderColor='#20142a'
        shape={props.grid}
        position={[0, 0]}
        grid={true}
      />
      {/* {renderBlocks(props.rows, props.cols)} */}
      <Game {...props} />
    </Board>
  </GridStyle>
)

export default Grid
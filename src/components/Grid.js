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
  background: linear-gradient(0deg, #132967, #22449d);
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

const GameOver = styled('div') `
	background: linear-gradient(0deg,rgba(185, 41, 101, 0.9),rgba(81,66,113,0.9));
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
  flex-direction: column;
	color: white;
  font-size: 18px;
	line-height: 2.3;
	text-align: center;
`

const Grid = (props) => (
  <GridStyle>
    <Board>
      <ShapeView
        background='transparent'
        borderColor='transparent'
        shape={props.grid}
        position={[0, 0]}
        grid={true}
      />
      <Game {...props} />
    </Board>

    {props.gameStatus !== 'START' &&
      <GameOver>
        <h1>{ props.gameStatus === 'GAME_OVER' ? 'GAME OVER' : 'PAUSED' }</h1>
        Score: {props.score}
      </GameOver>
    }
  </GridStyle>
)

export default Grid
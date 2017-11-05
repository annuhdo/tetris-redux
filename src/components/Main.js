import React, { Component } from 'react'
import Grid from './Grid'
import styled, { injectGlobal, keyframes } from 'styled-components'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P');
  body {
    margin: 0;
    padding: 0;
    background: #0f2663;
    font-family: 'Press Start 2P', cursive;
  }
`;

const Emulator = styled('div') `
  display: flex;
	align-items: center;
	justify-content: center;
  flex-direction: column;
`

const OuterGame = styled('div') `
  width: 400px;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  &:before {
    content: ' ';
    background: #031850;
    width: 500px;
    height: 100%;
    position: absolute;
    left: -50px;
    z-index: -1
  }
`

const Controls = styled('div') `
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 270px;
  width: 100%;
`

const DirButtons = styled('div') `
  width: 210px;
  height: 200px;
  border-radius: 5px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  position: relative;
  display: inline-block;
`

const CtrlButtons = styled('div') `
  width: 210px;
  margin-left: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
`

const Button = styled('button') `
  border: 0;
  outline: 0;
  background: linear-gradient(0deg, #991E51, #B92965);
  cursor: pointer;
  width: ${ props => props.width ? props.width + 'px' : 'auto'};
  height: ${ props => props.height ? props.height + 'px' : 'auto'};
  border-radius: ${ props => props.borderRadius || '0'};
  position: ${ props => props.top || props.bottom ? 'absolute' : 'relative'};
  top: ${ props => props.top || 'unset'};
  left: ${ props => props.left || 'unset'};
  bottom: ${ props => props.bottom || 'unset'};
  right: ${ props => props.right || 'unset'};
  margin: auto;
`

const CtrlButton = styled(Button) `
  width: 100%;
  padding: 20px;
  border-radius: 50px;
  background: linear-gradient(0deg, #991e51, #b92965);
  color: #E9EBF6;
  text-transform: uppercase;
	font-size: 16px;
	font-family: 'Press Start 2P', cursive;
`

const ResetButton = styled(CtrlButton) `
  background: #09c1ff;
	border-top-right-radius: 5px;
	padding: 15px 20px;
`

const PlayButton = styled(CtrlButton) `
  margin-top: 10px;
  padding: 15px 20px;
  background: #ffd63a;
  color: #000;
`

const SpaceButton = styled(CtrlButton) `
	margin-top: 20px;
	border-bottom-left-radius: 5px;
`

const Score = styled('div')`
  color: #ffd63a;
  margin: 20px 0;
  font-size: 16px;
`

const rainbowColor = keyframes`
  0% {
    color: #e15690;
  }
  25% {
    color: #ffd63a;
  }
  50% {
    color: #09c1ff;
  }
  100% {
    color: #fff;
  }
`

const Footnote = styled('div')`
  position: absolute;
  padding-bottom: 20px;
  bottom: 20px;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;

  a {
    color: #e15690;
    text-decoration: none;
    cursor: pointer;
    padding: 20px 20px 20px 0;
  }

  a:hover {
    text-decoration: initial;
  }

  &:hover {
    a {
      animation: ${rainbowColor} 1s linear infinite;
    }
  }

`

class Main extends Component {
  constructor() {
    super()

    this.state = {
      resume: false,
      timer: null
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false)
    document.addEventListener("keyup", this.handleKeyUp, false)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false)
    document.removeEventListener("keyup", this.handleKeyUp, false)
  }

  handleKeyUp = (e) => {
    switch (e.keyCode) {
      case 40:
        // down arrow
        // decelerate
        this.decelerate()
        break
    }
  }

  handleKeyDown = (e) => {
    switch (e.keyCode) {
      case 13:
        // enter
        this.play()
        break
      case 32:
        // space bar
        this.moves('space')
        break
      case 37:
        // left arrow
        this.moves('left')
        break
      case 39:
        // right arrow
        this.moves('right')
        break
      case 38:
        // up arrow
        this.moves('up')
        break
      case 40:
        // down arrow
        // accelerate
        this.accelerate()
        break
      default:
        break
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    switch (e.target.name) {
      case 'left':
        this.moves('left')
        break
      case 'right':
        this.moves('right')
        break
      case 'up':
        this.moves('up')
        break
      case 'reset':
        this.props.resetGrid()
        this.setState({
          resume: false
        })
        break
      case 'play':
        this.play()
        break
      case 'space':
        this.moves('space')
        break
      default:
        break
    }
  }

  mouseDown = (e) => {
    e.preventDefault()
    switch (e.target.name) {
      case 'down':
        this.accelerate()
      default:
        break
    }
  }

  mouseUp = (e) => {
    e.preventDefault()
    switch (e.target.name) {
      case 'down':
        this.decelerate()
      default:
        break
    }
  }

  play = () => {
    if (this.state.resume) {
      this.props.stop()
    }
    else {
      // this.startTick()
      this.props.start()
      this.props.dropTimer(500)
    }
    this.setState({
      resume: !this.state.resume
    })
  }

  moves = (dir) => {
    switch (dir) {
      case 'left':
        this.props.moveLeft()
        break
      case 'right':
        this.props.moveRight()
        break
      case 'up':
        this.props.rotate()
        break
      case 'space':
        this.props.hardDrop()
        break
      default:
        break
    }
  }

  accelerate() {
    this.props.accelerate()
    let timer = this.state.timer
    clearTimeout(timer)
    this.setState({ timer })
  }

  decelerate() {
    let timer = this.state.timer
    clearTimeout(timer)
    timer = setTimeout(() => {
      this.props.decelerate()
    }, 200)
    this.setState({ timer })
  }

  render() {
    return (
      <Emulator>
        <OuterGame>
          <Score>Score: {this.props.score}</Score>
          <Grid {...this.props} />

          <Controls>
            <DirButtons>
              <Button
                name="up"
                width='50'
                height='60'
                borderRadius='5px'
                left='0'
                right='0'
                top='10px'
                onClick={this.handleClick}
              />

              <Button
                name="left"
                width='60'
                height='50'
                borderRadius='5px'
                top='0'
                bottom='0'
                left='10px'
                onClick={this.handleClick}
              />

              <Button
                name="right"
                width='60'
                height='50'
                borderRadius='5px'
                top='0'
                bottom='0'
                right='10px'
                onClick={this.handleClick}
              />

              <Button
                name="down"
                width='50'
                height='60'
                borderRadius='5px'
                left='0'
                right='0'
                bottom='10px'
                onMouseDown={this.mouseDown}
                onMouseUp={this.mouseUp}
              />
            </DirButtons>
            <CtrlButtons>
              <ResetButton
                name="reset"
                onClick={this.handleClick}
              > Reset </ResetButton>

              <PlayButton
                name="play"
                onClick={this.handleClick}
              > {this.props.gameStatus === 'STOP' ? 'Play' : 'Pause'} </PlayButton>

              <SpaceButton
                name="space"
                onClick={this.handleClick}
              > Space Bar </SpaceButton>
            </CtrlButtons>
          </Controls>
        <Footnote>
          Made by <a href="https://twitter.com/annuhdo">@annuhdo</a> </Footnote>
        </OuterGame>
      </Emulator>
    )
  }
}

export default Main

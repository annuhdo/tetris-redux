import React, { Component } from 'react'
import ShapeView from './ShapeView'

class Game extends Component {
  constructor() {
    super()

    this.state = {
      intervalId: null,
      resume: false,
      speed: 500
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false)
  }

  componentWillUnmount() {
    this.stopTick()
  }

  handleKeyPress = (e) => {
    switch (e.keyCode) {
      case 13:
        // enter
        if (this.state.resume) {
          this.stopTick()
        }
        else {
          this.startTick()
        }
        this.setState({
          resume: !this.state.resume
        })
        break
      case 32:
        this.props.hardDrop()
        break
      case 37:
        // left arrow
        this.props.moveLeft()
        break
      case 39:
        // right arrow
        this.props.moveRight()
        break
      case 38:
        // up arrow
        this.props.rotate()
        break
      case 40:
        // down arrow
        // accelerate
        this.props.drop()
        break
      default:
        break
    }
  }

  startTick = () => {
    this.setState({
    intervalId: clearInterval(this.state.intervalId)
  })
    if (this.props.gameStatus === 'GAME_OVER') {
      console.log("can't start another interval!!")
    }
    else {
      this.props.start()
      let intervalId = setInterval(() => {
        if (this.props.newShape) {
          this.stopTick()
        }
        if (this.props.gameStatus === 'STOP' ||
        this.props.gameStatus === 'GAME_OVER') {
          this.stopTick()
        }
        else {
          this.props.drop()
        }
      }, this.state.speed)
      this.setState({
        intervalId
      })
    }
  }

  stopTick = () => {
    this.setState({
      intervalId: clearInterval(this.state.intervalId)
    })
    this.props.stop()

    if (this.props.newShape) {
      this.props.getNewShape()

      if (this.state.resume) {
        this.startTick()
      }
    }
  }

  render() {
    return (
      <div>
        <ShapeView
        shape={this.props.currentShape}
        position={this.props.shadowPosition}
        shadow={true}
        background='#514271'
        borderColor='#7975a7'
      />
       <ShapeView
        shape={this.props.currentShape}
        position={this.props.position}
      />
      </div>
    )
  }
}

  export default Game
import React, { Component } from 'react'
import ShapeView from './ShapeView'

class Game extends Component {
  constructor() {
    super()

    this.state = {
      intervalId: null,
      resume: false,
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false)
    this.props.resetGrid()
  }

  componentWillUnmount() {
    this.stopTick()
  }

  handleKeyPress = (e) => {
    switch (e.keyCode) {
      case 32:
        // space bar
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
        break
      default:
        break
    }
  }

  startTick = () => {
    let intervalId = setInterval(() => {
      this.props.drop()
    }, 1000)
    this.setState({
      intervalId
    })
  }

  stopTick = () => {
    clearInterval(this.state.intervalId)
  }

  render() {
    return (
       <ShapeView
        shape={this.props.currentShape}
        position={this.props.position}
        color='#ba2894'
        borderColor='#ff4ad6'
      />
    )
  }
}

  export default Game
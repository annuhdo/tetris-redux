import React, { Component } from 'react'
import ShapeView from './ShapeView'

class Game extends Component {
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
    this.stopTick()
  }

  handleKeyUp = (e) => {
    switch (e.keyCode) {
      case 40:
      // down arrow
      let timer = this.state.timer
      clearTimeout(timer)
      timer = setTimeout(() => {
        this.props.decelerate()
      }, 200)
      this.setState({ timer })
      break
    }
  }

  handleKeyDown = (e) => {
    switch (e.keyCode) {
      case 13:
        // enter
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
        // this.props.dropTimer(350)
        this.props.accelerate()
        let timer = this.state.timer
        clearTimeout(timer)
        this.setState({ timer })
        break
      default:
        break
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
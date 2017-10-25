import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import {O, I, Z, T, L} from './Tetromino'
import Square from './Square'
import ShapeView from './ShapeView'

class Game extends Component {
  constructor() {
    super()

    this.state = {
      intervalId: null,
      resume: false,
      row: 1,
      col: 5
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
        this.setState({
          col: Math.max(this.state.col - 1, 1)
        })
        break
      case 39:
        // right arrow
        this.setState({
          col: Math.min(this.state.col + 1, 9)
        })
        break
      case 38:
        // up arrow
        // need to rotate 90 deg
      case 40:
        // down arrow
        // accelerate
        break
      default:
        break
    }
  }

  startTick = () => {
    let row = this.state.row
    let intervalId = setInterval(() => {
      row += 1
      this.setState({
        row
      })
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
      <div>
        <button onClick={this.startTick}>Start</button>
        <button onClick={this.stopTick}>Stop</button>
        <ShapeView shape={new L(this.state.row, this.state.col, '#ba2894')} />
      </div>
    )
  }
}

  export default Game
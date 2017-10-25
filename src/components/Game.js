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
      start: false,
      row: 1,
      col: 5
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentWillUnmount() {
    this.stopTick()
  }

  handleKeyPress = (e) => {
    switch (e.keyCode) {
      case 32:
        if (this.state.start) {
          this.stopTick()
        }
        else {
          this.startTick()
        }
        this.setState({
          start: !this.state.start
        })
        break
      case 37:
        this.setState({
          col: Math.max(this.state.col - 1, 1)
        })
        break
      case 39:
        this.setState({
          col: Math.min(this.state.col + 1, 9)
        })
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
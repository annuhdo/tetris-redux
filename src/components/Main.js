import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import {O, I, Z, T, L} from './Tetromino'
import ShapeView from './ShapeView'


class Main extends Component {
  constructor() {
    super()

    this.state = {
      intervalId: null,
    }
  }

  componentDidMount() {
    let row = 1
    let intervalId = setInterval(() => this.props.append(row++, 1, 'tomato'), 1000)
    this.setState({
      intervalId
    })
  }

  componentWillUnmount() {
    this.clearAppend
  }

  clearAppend = () => {
    clearInterval(this.state.intervalId)
  }

  render() {
    let data = this.props.shapes
    return (
      <div>
        <button onClick={this.clearAppend}>Clear</button>
        {data.map((tetromino, i) => <ShapeView key={i} shape={tetromino} />)}
      </div>
    )
  }
}

export default Main

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class GameView extends Component {
  constructor() {
    super()

    this.state = {
      intervalId: null,
    }
  }

  render() {
    return (
      <div className="border" style={{width: this.props.game.cols*25, height: this.props.game.rows*25}}>
        <PieceView piece={this.props.game.fallingPiece} />
        <RubbleView rubble={this.props.game.rubble} />
      </div>
    )
  }
}

export default GameView

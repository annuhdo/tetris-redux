import React from 'react'
import Grid from './Grid'

const Main = (props) => (
  <Grid {...props} />
)

// class Main extends Component {
//   constructor() {
//     super()
//   }

//   render() {
//     return (
//       <Grid rows={20} cols={10} {...this.props} />
//     )
//   }

  // render() {
  //   let data = this.props.shapes
  //   return (
  //     <div>
  //       <button onClick={this.startTick}>Start</button>
  //       <button onClick={this.stopTick}>Stop</button>
  //       {data.map((tetromino, i) => <ShapeView key={i} shape={tetromino} />)}
  //     </div>
  //   )
  // }
// }

export default Main

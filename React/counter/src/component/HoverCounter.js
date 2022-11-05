import React, { Component } from 'react'
import withCounter from './withCounter'

export class HoverCounter extends Component {
    // state={
    //     count:0
    // }
    // incrementCount(){
    //     this.setState({
    //         count:this.state.count+1
    //     })
    // }
  render() {
    let {count,incrementCount}=this.props
    console.log("props",this.props)
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hover {count} times</h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter,10)
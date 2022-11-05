import React, { Component } from 'react'
import WithCounter from './WithCounter'


export class HoverCounter extends Component {
     // state={
    //     count:0
    // }

    // increamentCount(){
    //     this.sestate({
    //         count:this.state.count+1
    //     })
    // }
  render() {
    let {count,increamentCount}=this.props
    return (
      <div>
        <h2 onMouseOver={increamentCount}>Hover {count} times</h2>
      </div>
    )
  }
}

export default WithCounter(HoverCounter,100)
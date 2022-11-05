import React, { Component } from 'react'
import WithCounter from './WithCounter';

export class ClickCounter extends Component {
    // state={
    //     count:0
    // }

    // increamentCount(){
    //     this.sestate({
    //         count:this.state.count+1
    //     })
    // }
  render() {
    let {count,increamentCount} = this.props
    console.log("this.props");
    return (
      <div>
        <h2>name is : {this.props.name}</h2>
        <button onClick={increamentCount}>click {count}</button>
      </div>
    )
  }
}

export default WithCounter(ClickCounter,20)
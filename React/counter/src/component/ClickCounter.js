import React, { Component } from 'react'
import withCounter from './withCounter'

export class ClickCounter extends Component {
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
        <h2>Name is:{this.props.name}</h2>
        <button onClick={incrementCount}>click {count} times</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter,10)
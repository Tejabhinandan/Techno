import React, {PureComponent } from 'react'

// When a class component is extending PureComponent whenever state or props is changed in shouldComponentUpdate method 
// shallow comparison of the state or props will be done and if at all if there are some changes in state or props the next lifecycle
// methods of updating phase will be executed ie render(), getSanpshotBeforeUpdate(), componentDidUpdate()
// Else the next lifecycle methods of updating phase will not executed and render will be avoided
// Note: it does shallow comparison not deep comparison

export default class RegComp extends PureComponent{
  render() {
    console.log("props",this.props.uname)
    return (

      <div>
        <h1>{this.props.uname}</h1>
      </div>
    )
  }
}

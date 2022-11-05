import React, { Component } from 'react'
import FunComp from './FunComp'
import RegComp from './RegComp'

export class ParentComp extends Component {
    state={
        name:"Ajay"
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Teja"
            })
        },2000)
    }
  render() {
    return (
      <div>
        <RegComp uname={this.state.name}/>
        <FunComp uname={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
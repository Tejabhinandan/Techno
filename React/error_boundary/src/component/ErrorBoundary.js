import React, { Component } from 'react'
import FallBackUI from './FallBackUI'

// class ErrorBoundary extends Component {
//     state={
//         hasError:false
//     }

//     static getDerivedStateFromError(error){
//         console.log("getDerivedStateFromError")
//         console.log("error",error)
//         return {hasError:true}
//     }

//     componentDidCatch(error,info){
//         console.log("info",info)
//         console.log("componentDidCatch executed")
//     }

export class ErrorBoundary extends Component {
   state={
    hasError:false
   }
   static getDerivedStateFromError(error){
    return{hasError:true}
   }

  render() {
    if(this.state.hasError){
        return <FallBackUI/>
    }else{
        return this.props.children
    }
  }
}

export default ErrorBoundary
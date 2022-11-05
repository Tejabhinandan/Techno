// class Parent extends React.Component{
//     state={
//         text:null
//     }
//     // chocolate function
//     getDataFromChild(childData){
//         console.log("childdata in Parent",childData)
//         this.setState({
//             text:childData
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Welcome {this.state.text}</h1>
//                 <h2>im Parent</h2>
//                 <Child getDataFromChild={this.getDataFromChild.bind(this)}/>
//             </div>
//         )
//     }
// }
// class Child extends React.Component{
// render(){
//     let data="hey im the data in child"
//     return(
//         <div>
//             <h1>im child</h1>
//             <button onClick={()=>{this.props.getDataFromChild(data)}}>Send data to Parent</button>
//         </div>
//     )
// }
// }

class Datatransfer extends React.Component{
  state={
    name:"teja"
  }
  getdata(child){
    this.setState({
      name:child
    })
  }
  render(){
    return(
      <div>
        <h1>
            im parent {this.state.name}
        </h1>
        <Child getdata={this.getdata.bind(this)}/>
      </div>
    )
  }
} 

class Child extends React.Component{
  render(){
    let data="data frm child"
    return(
      <div>
        <h1>im child</h1>
        <button onClick={()=>{this.props.getdata(data)}}>send data to parent</button>


      </div>
    )
  }
}


ReactDOM.render(<Datatransfer/>,document.getElementById("container"))
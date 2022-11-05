// class Welcome extends React.Component{
//     state={
//         firstName:"Dhanush",
//         age:21
//     }

//     changeDeatails(){
//         //never mutate the state like this
//         // console.log("before update",this.state);
//         // this.state.fName="Akshata"
//         // this.state.age=22
//         // console.log("after update",this.state);

//         //use setState to mutate the state
//         console.log("before update",this.state);
//         this.setState({
//             firstName:"Teja",
//             age:26
//         },()=>{
//             console.log("after update",this.state)
//         })
//     }

    
//     render(){
//         localStorage.setItem("data",JSON.stringify(this.state))

//         return(
//             <div>
//                 <h1>welcome, {this.props.brand}</h1>
//                 <h2>person Name:{this.state.firstName}, Age:{this.state.age}</h2>
//                 <button onClick={()=>{this.changeDeatails()}}>Change person details</button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Welcome brand="volvo"/>,document.getElementById("container"))


class Parent extends React.Component{
    state={
        fname:"teja",
        age:12
    }

    change(){
        this.setState({
            fname:"Nandan",
            age:15
        })
    }

    render(){
        return(
            <div>
                <h1>Person Name: {this.state.fname}</h1>
                <h1>Person Age: {this.state.age}</h1>
                <button onClick={()=>{this.change()}}>Change Name</button>
            </div>
        )
    }
}

ReactDOM.render(<Parent/>,document.getElementById("container"))
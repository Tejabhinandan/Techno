// class Parent extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>welcome,im Parent {this.props.uname}</h1>
//                 <Child uname={this.props.uname} fname="Teja" appname="Netflix"/>
//             </div>
//         )
//     }
// }

// class Child extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>hey im child, {this.props.uname}</h1>
//                 <h2>first name: {this.props.fname}</h2>
//                 <h2>App name: {this.props.appname}</h2>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Parent uname={"teja"}/>,document.getElementById("container"))

class Parent extends React.Component{
    render(){
        return(
            <div>
                <h1>im parent {this.props.uname} </h1>
                <Child fname="tejabhinandan" uname={this.props.uname} num={3434}/>
            </div>
        )
    }
}

class Child extends React.Component{
    render(){
        return(
            <div>
                <h1>im child {this.props.fname}</h1>
                <h1>im child {this.props.uname}</h1>
                <h1>im child {this.props.num}</h1>
            </div>
        )
    }
} 


ReactDOM.render(<Parent uname={'teja'}/>,document.getElementById('container'))
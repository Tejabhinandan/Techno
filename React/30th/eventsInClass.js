class Welcome extends React.Component{
    constructor(props){
        super(props)
        console.log("props",this.props)
        this.getAge=this.getAge.bind(this)
    }

    render(){
        return <div>
            <h1>welcome to react {this.props.fName}</h1>
            <button onClick={this.getName.bind(this)}>Get Name</button> {/* bind method */}
            <button onClick={this.getAge}>Get Age</button>   {/* by constructor */}
            {/* most used way to bind the element */}
            <button onClick={()=>{this.getplace()}}>Get place</button>
            <button onClick={()=>{this.getData("GOOGLE")}}>Get Data</button>
        </div>
    }
    getName(){
        console.log("getname executed")
    }
    getAge(){
        console.log("getage Executed")
    }
    getplace(){
        console.log("Get placed is goa")
    }
    getData(data){
        console.log("getdata executed",data)
    }
}
ReactDOM.render(<Welcome fName="Raju"/>,document.getElementById("container"))
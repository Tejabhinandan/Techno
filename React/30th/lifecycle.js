class Parent extends React.Component{

    constructor(props){
        //1. used to initialise and binding
        super(props)
        this.state={
            text:"MOUNTING PHASE",
            show :true
        }
        console.log("parent constructor executed");
    }
static getDerivedStateFromProps(props,state){
    //1.return new state or if no change is required in state then return null
    console.log("getDerivedStateFromProps executed");
    return state
}

render(){
    //1.return jsx and no side effects & should and update state in render
    console.log("parent render exe");
    return(
        <div>
            <p>
                {this.state.text}
            </p>
            <button onClick={()=>{this.updateText("updating phase")}}>
                click
            </button>
            {this.state.show ? <Child /> :null}
        </div>
    )

}
updateText(text){
    this.setState({
        text:text,
        show:false,
    })
}

getSnapBeforeUpdate(prevProps,prevState){
    console.log("getSnapBeforeUpdate exe");
    return "scrollling position"
}


shouldComponentUpdate()
{
    console.log("shouldComponentUpdate");
    return true
}
componentDidUpdate(prevProps,prevState,snapShot){
    console.log("componentDidUpdate exe");
    console.log("=======================");
console.log("prevProps",prevProps);
console.log("prevState",prevState);
console.log("snapshot",snapShot);
console.log("=======================");
}
componentDidMount(){
    //first time mounting to real dom
    // 1. used to make side effects if e.i making api calls,
    // interacting  with DOM 
    // 2 used to update the state 
    
    console.log("parent ComponentDidMount exe ");
}

}
class Child extends React.Component{
    render(){
        return<h1>i am Child</h1>
    }
}
ReactDOM.render(<Parent />,document.getElementById("container"))
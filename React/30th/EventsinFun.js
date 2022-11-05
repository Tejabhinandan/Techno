function Welcme(props){
    let getName=()=>{
        console.log("getName executed")
    }

    let getData=(data)=>{
        console.log("getdata executed",data)
    }
    return(
        <div>
            <h1>hello {props.fName}</h1>
            {/* <button onClick={getName}>get Name</button> */}
            {/* or the below 1 */}
            <button onClick={()=>{getName()}}>get Name</button>
            <button onClick={()=>{getData("google")}}>get data</button>
        </div>
    )
}

ReactDOM.render(<Welcme fName="teja"/>, document.getElementById("container"))
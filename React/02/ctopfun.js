// function Parent(){
//     const [data, setdata] = React.useState("")
//     let getDataFromChild=(childData)=>{
//         console.log("childData in Parent",childData);
//         setdata(childData)
//     }
//     return(
//         <div>
//             <h1>im Parent {data}</h1>
//             <Child getDataFromChild={getDataFromChild}/>
//         </div>
//     )
// }
// function Child(props){
//     console.log("child props",props)
//     let data="Hey im child data"
//     return(
//         <div>
//             <h1>im child</h1>
//             <button onClick={()=>{props.getDataFromChild(data)}}>
//                 Send data to Parent
//             </button>
//         </div>
//     )
// }

function Parent(){
    const [data, setdata] = React.useState("")
    let getdata=(childData)=>{
        setdata(childData)

    }
    return(
        <div>
            <h1>im parent {data}</h1>
            <Child getdata={getdata}/>
        </div>
    )
}

function Child(props){
    let data="im data"
    return(
        <div>
            <h1>im child</h1>
            <button onClick={()=>{props.getdata(data)}}>send data to parent</button>
        </div>
    )
}
ReactDOM.render(<Parent/>,document.getElementById("container"))
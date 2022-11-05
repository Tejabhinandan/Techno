// function Parent(props){
//     console.log("props in parent",props)
//     let data=["banana","lichi","mango","kiwi","grapes"]
//     return(
//         <div>
//             <h1>im Parent,🙏{props.uname}</h1>
//             <Child fruits={data} uname={props.uname}/>
//         </div>
//     )
// }

// function Child(props){
//     console.log("props in child",props)
//     return(
//         <div>
//             <h1>I m child{props.uname}</h1>
//             {props.fruits.map((val,idx)=>{
//                 return <li key={idx}>{val}</li>
//             })}
//         </div>
//     )
// }
// ReactDOM.render(<Parent uname="teja"/>,document.getElementById("container"))

function Parent(props){
    let data=["apple","banana","lichi"]
    return(
        <div>
            <h1>im parent, {props.uname}</h1>
            <Child fname='tejabhinandan' uname={props.uname} data={data}/>
        </div>
    )
}

function Child(props){
    return(
        <div>
            <h1>im child {props.fname}</h1>
            <h1>im child {props.uname}</h1>
           { props.data.map((val,ind)=>{
                    return <li key={ind}>{val}</li>
            })}
        </div>
    )
}


ReactDOM.render(<Parent uname={"teja"}/>,document.getElementById("container"))
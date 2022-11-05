// function Welcome(){
//     // state on top
//     const [name, setname] = React.useState("danush")
//     const [age, setage] = React.useState(18)

//     let changeName=()=>{
//         setname("Teja")
//         setage(20)
//     }
//     return(
//         <div>
//             <h1>Welcome, {name} {age}</h1>
//             <button onClick={()=>{changeName()}}>Change name</button>
//         </div>
//     )
// }
function Welcome(){
    const [name, setname] = React.useState("teja")
    const [age, setage] = React.useState(10)
    let changeData=()=>{
        setname("abhi")
        setage(10)
    }
    return(
        <div>
            <h1>{name} {age}</h1>
            <button onClick={()=>{changeData()}}>changeName</button>
        </div>
    )
}
ReactDOM.render(<Welcome/>,document.getElementById("container"))
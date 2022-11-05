// function Welcome(){
//     const [person, setperson] = React.useState({
//         firstName:"Teja",
//         lastname:"abhi",
//         age:18
//     })
//     let changeDetails=()=>{
//         // never update state like this
//         // setperson({
//             // firstName:"teja"
//         // })
//         setperson({
//             ...person,
//             firstName:"nandan",
//             age:21
//         })
//     }
//     return(
//         <div>
//             <h1>Welcome, {person.firstName} {person.lastname} {person.age}</h1>
//             <button onClick={changeDetails}>change Details</button>
//         </div>
//     )
// }
// ReactDOM.render(<Welcome/>,document.getElementById("container"))


function OBj(){
    const [person, setperson] = React.useState({
        fname:"teja",
        lname:"abhi"
    })
    let changeData=()=>{
        setperson({
            ...person,
            fname:"nndan",
            lname:"abhinandan"
        })
    }

    return(
        <div>
            <h1> {person.fname} {person.lname}</h1>
            <button onClick={changeData}>change data</button>
        </div>
    )
}

ReactDOM.render(<OBj/>,document.getElementById("container"))






















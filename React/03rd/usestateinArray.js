 function Welcome(){
    const [bikes, setbikes] = React.useState(["Tiger","RX100","KTM","Daytona","600i","Perak"])

    let removeKtm=()=>{ 
        let findIndexofKTM= bikes.indexOf("KTM")
        console.log("findIndexofKTM",findIndexofKTM)
        if(findIndexofKTM>=0){
            bikes.splice(findIndexofKTM,1)
            setbikes([...bikes])
        }
    }
    return(
        <div>
            {
                bikes.map((val,idx)=>{
                    return <li key={idx}>{val}</li>
                })
            }
            <button onClick={removeKtm}>Remove KTM</button>
        </div>
    )
}
ReactDOM.render(<Welcome/>,document.getElementById("container"))

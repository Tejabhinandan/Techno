let list =React.createElement("ul",null,
React.createElement("li",{id:"car"},"Car"),
React.createElement("li",{className:"jeep"},"Jeep"),
) 

// Looping through an array
let moblies = ["oneplus","iphone","redmi","pixel","Nokia"]

let MOblieItem=moblies.map((value,index)=>{
    return React.createElement("li",{key:index},value)
})
// wrapping inside single div
let singleDiv=React.createElement("div",null,list,MOblieItem)

ReactDOM.render(singleDiv,document.getElementById("container"))
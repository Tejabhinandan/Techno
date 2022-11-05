//  let uname="Teja"

//  let element=<h1>Hello {uname}</h1>

//  let mobiles=["iphone","oppo","realme","samsung","vertu"]

//  let MOblieItem=mobiles.map((val,idx)=>{
//      return <li key={idx}>{val}</li>
//  })

//  let allItem=<div>
//      {element}
//      {MOblieItem}
//  </div>

let url="https://jsonplaceholder.typicode.com/users"

let api=async()=>{
    let response=await fetch(url)
    let data= await response.json()
    
    let titles=data.map((val,id)=>{
        return <li key={id}>{val.name}</li>
    })
    ReactDOM.render(titles,document.getElementById("container"))
}

api()
 ReactDOM.render(allItem, document.getElementById("container"))
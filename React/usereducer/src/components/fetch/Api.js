import React from 'react'

function Api() {
    let url="https://jsonplaceholder.typicode.com/users"
    async function fecthdata(){
        try{
            let res= await fetch(url)
            let data= await Response.json()
            console.log(res)
            console.log(data)
            
        }
        catch{
 
        }
    }
    
    fecthdata()
  return (
    <div>Api</div>
  )
}

export default Api
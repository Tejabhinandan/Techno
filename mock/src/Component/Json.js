import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

function Json() {

    const [search, setSearch] = useState([]) 
    const [searchValue, setsearchValue] = useState('')

    let update=async()=>{
        try{
            let posts=`https://jsonplaceholder.typicode.com/posts`
            let res = await fetch(posts)
            let data= await res.json()
            setSearch(data)
        }catch(err){
            console.log(err)

        }
}

let saveData=(e)=>{
  // ...searchValue,
  [e.target.value]=e.target.name
}

    useEffect(() => {
      update()

    }, [])
    


  return (
    <div>
        <input placeholder='Search' name='searchValue' onChange={(e)=>saveData(e)} />
        <button onClick={()=>update()}>Search</button>
        <br/>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>user Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {search.map((val,idx)=>{
            return(
        <tr key={idx}>
          <td>{val.userId}</td>
          <td>{val.id}</td>
          <td>{val.title}</td>
          <td>{val.body}</td>
        </tr>

            )
        })}
      </tbody>
    </Table>
    </div>
  )
}

export default Json
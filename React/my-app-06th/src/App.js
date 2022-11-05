import UserForm from "./Components/UserForm"
import UserTable from "./Components/UserTable"
import React,{useState} from "react"

function App() {
//   const [userFormData, setuserFormData] = useState([])

//   console.log("userformdata in parent",userFormData)

//   let getGetFromUserForm=(userData)=>{
//     console.log("userdata from child ",userData)
//     let userFormDataCopy=[...userFormData]
//     userFormDataCopy.push(userData)
    
//     console.log(userFormDataCopy)

//     setuserFormData(
//       userFormDataCopy
//       )}
      
    
  
//   return (
//     <div className="App">
//       <UserForm getDataFromUserForm={getGetFromUserForm}/>
//       <UserTable userFormData={userFormData} />
//     </div>
//   );

  const [userfrmdata, setuserfrmdata] = useState([])
  let getdatafrm=(username)=>{
    let copy=[...userfrmdata]
    copy.push(username)
    setuserfrmdata(
      copy
    )
  }
  return (
    <div className="App">
      <UserForm getdatafrm={getdatafrm}/>
    </div>
  )
}


export default App;
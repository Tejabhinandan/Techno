let users=[{
    id:1,
    name:"Ranjith",
    age:18
},{
    id:2,
    name:"Lolakshi",
    age:18
},
{
    id:3,
    name:"Dhanush",
    age:12
},]

let requestHandler=(request,response)=>{
    if(request.url==='/'){
        response.end('Home Page')
    }else if(request.url==='/login'){
        response.end('Login Page')
    }else if(request.url==='/users'){
        let usersData=JSON.stringify(users)
        response.end(usersData)
    }
}

module.exports={
    requestHandler
}
let  axios=require ('axios')

axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    // handle success
    console.log(response.data)
  })
  .catch(function(error){
    console.log(error )
  })
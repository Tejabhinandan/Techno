let searchText= prompt("movies")

let imdbAPi = `http://www.omdbapi.com/?s=${searchText}&apikey=f056e2f7`;

async function searchMovies(){
    try{
     let res= await fetch(imdbAPi)
     let data= await res.json()
     console.log(data)
        data.search.map((val)=>{
            console.log(val)
        })
    }catch(err){
        console.log(err);

    }
}
searchMovies()
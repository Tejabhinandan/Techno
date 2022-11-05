// console.log(url);
// let searchText=prompt("t")
let api = async () => {
  var searchText = document.getElementById("search").value;
  let url = `http://www.omdbapi.com/?s=${searchText}&apikey=f056e2f7`;
  console.log(searchText);

  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    let titles = `<div style="display:flex;justify-content:space-around;flex-wrap: wrap; background-color: rgb(236, 163, 188)">`;
    data.Search.map((val) => {
      const title = val.Title;
      const year = val.Year;
      const poster = val.Poster;
      // const deatils=val.Search[0]

      titles += `<div style="border: 2px solid gray;background-color: rgb(236, 163, 188)">`;
      titles += `<h5 style="text-align: center;">${title}</h5>`;
      titles += `<img src=${poster} height="300px" width="300px"/>`;
      titles += `<h5 style="text-align: center;">${year}</h5>`;
      titles += `<button style="background-color: grey; color:white; width:300px; height:40px;">MORE DETAILS</button>`;
      // titles+=`<h5 style="text-align: center;">${deatils}</h5>`
      titles += `</div>`;
    });
    titles += `</div>`;
    const ele = document.getElementById("movie");
    // const ele1=document.getElementsByClassName("image")
    ele.innerHTML = titles;
  } catch (err) {
    console.log(err);
  }
};
// api()

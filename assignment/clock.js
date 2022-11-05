setInterval(hrsd, 1000);
function hrsd() {
  let element = document.getElementById("hours");
  let hour = new Date();
  // console.log(hour)
  let hr = hour.getHours();
  //   console.log(hr);
  let min = hour.getMinutes();
  //   console.log(min);
  element.innerText = `${hr}:${min}`;

  let Pms = document.getElementById("pm");
  let pm = hr > 12 ? "PM" : "AM";
  Pms.innerText = `${pm}`;
}

setInterval(sec, 1000);
function sec() {
  let Secelement = document.getElementById("sec");
  let sec = new Date();
  let secs = sec.getSeconds();
  Secelement.innerText = `${secs}`;
  // console.log(secs)
}

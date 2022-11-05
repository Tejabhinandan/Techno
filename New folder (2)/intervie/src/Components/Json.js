import React, { useEffect, useState } from "react";

function Json() {
  const [data, setdata] = useState([]);
  const [searchval, setsearchval] = useState('');

  let update = async () => {
    try {
      let post = "https://jsonplaceholder.typicode.com/users";
      let res = await fetch(post);
      let da = await res.json();
      setdata(da);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    update();
  }, []);

  console.log("Data", data);

  return (
    <div>
      <input
        placeholder="enter name"
        name="search"
        value={searchval}
        onChange={event=>setsearchval(event.target.value)}
      />
        
        {
            data.filter(val=>{
                if(searchval===''){ 
                    return val;
                }else if(val.name.toLowerCase().includes(searchval.toLowerCase())){
                    return val;
                }
                console.log(val.name);
            })
            .map((val, idx) => {
                return (
                  <ul key={idx}>
                    <li>{val.name}</li>
                  </ul>
                );
              })
        }
      
    </div>
  );
}

export default Json;

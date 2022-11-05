import React, { useEffect, useReducer } from "react";
import axios from "axios";

let initialValue = {
  loading:true,
  post:[],
  error:''
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCHSUCCESS":
      return {
        loading:false,
        post:action.payload
      };
    case "FETCHERROR":
      return {
        loading:false,
        post: {},
      };
    default:
      return state;
  }
};

function FetchApi() {
  

  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    fetching();
  }, []);

  let fetching = async () => {
    try {
      let response = await axios.get("https://jsonplaceholder.typicode.com/users")

      dispatch({type:"FETCHSUCCESS", payload:response.data});
      
    } catch (error) {
      dispatch({ type: "FETCHERROR" });
    }
  };
    console.log(state);

    return (
    <div>

      <h1>{state.loading ? "loading" : state.post.name}</h1>
      {
        state.post.map((val,idx)=>{
          return (<div key={idx}>
            <h1>{val.username}</h1>
          </div>)
        })
      }

      {state.error?state.error:null}

    </div>)
 
}
export default FetchApi;
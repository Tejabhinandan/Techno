import React from 'react'
import classes from "./tes1.module.css" 
const Test1 = () => {
    console.log("classes",classes);
  return (
    <div>
    <h1 className={classes.sample}>FIRST LINE</h1>
    <h1 className={classes.sample}
    >SECOND LINE</h1>
    </div>
  )
}

export default Test1
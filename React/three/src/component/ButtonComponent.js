import React from 'react'

const ButtonComponent=({
    onSubmit =() =>{},
    lable="",
    style={},
    className="",
})=> {
  return (
    <div>
        <button onClick={onSubmit} style={style} className={className}> {lable} </button>
    </div>
  );
};
export default ButtonComponent
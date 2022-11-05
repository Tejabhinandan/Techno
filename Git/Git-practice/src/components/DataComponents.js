import React from "react";
import ButtonComponent from "../atom/ButtonComponent";

const DataComponents = ({ setState }) => {
  const handleSubmit = () => {
    console.log("hello");
    setState(false);
  };
  return (
    <div>
      <ButtonComponent
        lable="Create"
        onSubmit={() => {
          handleSubmit();
        }}
      />
    </div>
  );
};

export default DataComponents;

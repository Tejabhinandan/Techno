import React from "react";

const ButtonComponent = ({
  onSubmit = () => {},
  lable = "Button",
  style = {},
  className = "",
}) => {
  return (
    <div>
      <button
        onClick={onSubmit}
        style={style}
        lable={lable}
        className={className}
      >
        {lable}
      </button>
    </div>
  );
};

export default ButtonComponent;

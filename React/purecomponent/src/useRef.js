import React, { useEffect, useRef } from "react";

function UseRef() {
  let newRef = useRef();
  useEffect(() => {
    focusInput();
  }, []);
  let focusInput = () => {
    newRef.current.focus();
  };

  return (
    <div>
      <input ref={newRef} />
    </div>
  );
}

export default UseRef;

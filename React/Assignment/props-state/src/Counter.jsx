import React, { useState } from "react";

function Counter() {
  let [num, setNum] = useState(1);
  return (
    <div>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </button>
      <p>{num}</p>
      <button
        onClick={() => {
          if (num > 0) {
            setNum(num - 1);
          }
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;

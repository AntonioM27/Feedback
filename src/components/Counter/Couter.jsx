import { useState } from "react";

function Counter() {
  const [val, setVal] = useState(0);

  const changeState = (op) => {
    if (op === "+") {
      setVal(val + 1);
    } else if (op === "-") {
      if (val > 0) {
        setVal(val - 1);
      }
    } else {
      console.warn("Unsupported operator");
    }
  };

  return (
    <>
      <p>Trenutno Stanje: {val}</p>
      <button onClick={() => changeState("+")}>+</button>
      <button onClick={() => changeState("-")}>-</button>
    </>
  );
}

export default Counter;

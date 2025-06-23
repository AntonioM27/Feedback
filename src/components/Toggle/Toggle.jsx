import { useState } from "react";

function Toggle() {
  const [val, setVal] = useState();

  return (
    <>
      <p
        onClick={() => {
          setVal(!val);
        }}
      >
        {val ? "Yes" : "False"}
      </p>
    </>
  );
}

export default Toggle;

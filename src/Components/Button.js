import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);

  const countClickHandler = () => {
    if (count === 3) {
      setCount(0);
    } else {
      setCount((count) => count + 1);
    }
  };

  return (
    <button data-testid="button" onClick={countClickHandler}>
      {count}
    </button>
  );
};

export default Button;

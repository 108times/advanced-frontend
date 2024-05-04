import { useState } from "react";
import "./counter.scss";
export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount((c) => c + 1)}>Add</button>
    </div>
  );
};

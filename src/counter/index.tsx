import { useState } from "react";
import classes from "./counter.module.scss";
export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      Count: {count}
      <button className={classes.button} onClick={() => setCount((c) => c + 1)}>
        Add
      </button>
    </div>
  );
};

import React from "react";
import { useCounterStore } from "../store/counter.store";

const ZustandState = () => {
  const counter = useCounterStore((state) => state.count);

  const addHandler = useCounterStore((state) => state.increment);
  const subHandler = useCounterStore((state) => state.decrement);

  return (
    <div>
      <div>
        <h3>Zustand State</h3>
        <div>
          <h1>{counter}</h1>
          <button onClick={addHandler}>Tambah</button>
          <button onClick={subHandler}>Kurang</button>
        </div>
      </div>
    </div>
  );
};

export default ZustandState;

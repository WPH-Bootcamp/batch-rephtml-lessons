import React, { useState } from "react";

const RegularState = () => {
  const [counter, setCounter] = useState(0);

  const addHandler = (): void => {
    console.log("Add Handler");
    if (counter >= 10) {
      alert("Max Number 10");
    } else {
      setCounter(counter + 1);
    }
  };
  const subHandler = (): void => {
    console.log("Sub Handler");
    if (counter <= 0) {
      alert("Min Number 10");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <h3>RegularState</h3>
      <div>
        <h1>{counter}</h1>
        <button onClick={addHandler}>Tambah</button>
        <button onClick={subHandler}>Kurang</button>
      </div>
    </div>
  );
};

export default RegularState;

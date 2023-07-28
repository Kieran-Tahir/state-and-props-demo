import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(5);

  function minus() {
    setCount(count - 1)
  }

  function add() {
    setCount(count + 1)
  }

  return (
    <>
      <div className="counter-box">
        <p>How many people are in class?</p>
        <div className="row">
          <button onClick={minus}> - </button>
          <p className="count-value"> {count} </p>
          <button onClick={add}> + </button>
        </div>
      </div>
    </>
  );
}

export default Counter;

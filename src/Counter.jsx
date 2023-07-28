import React, {useState} from "react";

function Counter(props) {
    const [count, setCount] = useState(5)

  return (
    <>
    <div className="counter-box">
      <p>How many people are in class?</p>
      <div className='row'>
        <button> - </button>
        <p className="count-value"> Props.count is: {props.count} </p>
        <p className="count-value"> useState count is: {count} </p>
        <button> + </button>
      </div>

    </div>
    </>
  );
}

export default Counter;

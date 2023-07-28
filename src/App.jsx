import "./styles/index.scss";
import Persons from "./Persons";
import Counter from "./Counter";

function App() {

  const count = 0

  return (
    <>
      <div className="App">
        <Persons />
        {/* <p>Hey! {data[0].name}</p>
      <p>Hey! {data[1].name}</p>
      <p>Hey! {data[2].name}</p>
      <p>Hey! {data[3].name}</p>
      <p>Hey! {data[4].name}</p> */}
      </div>
      <div className="counter">
        <Counter count={count}/>
      </div>
    </>
  );
}

export default App;

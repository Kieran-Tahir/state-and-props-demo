import "./styles/index.scss";
import Persons from "./Persons";
import Counter from "./Counter";

function App() {

  return (
    <>
      <div className="App">
        <Persons />
      </div>
      <div className="counter">
        <Counter />
      </div>
    </>
  );
}

export default App;

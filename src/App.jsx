import './styles/index.scss'
import data from './data';
import Persons from './Persons';

function App() {

  return (
    <div className="App">
      <Persons />
      {/* <p>Hey! {data[0].name}</p>
      <p>Hey! {data[1].name}</p>
      <p>Hey! {data[2].name}</p>
      <p>Hey! {data[3].name}</p>
      <p>Hey! {data[4].name}</p> */}
      {data.map((person, i) => (
        <div key={i}>
          <p>Hey! {person.name}</p>
          <p>Your age is {person.age}</p>
          <p>You hobbies are {person.hobbies}</p>
        </div>
      ))}
      
    </div>
  );
}

export default App;

import React from "react";
import { people } from "./data";
import Address from "./Address";

function Persons() {
  return (
    <>
      {people.map((person, i) => (
        <div key={i} className="person">
          <p>Hey! {person.name}</p>
          <p>Your age is {person.age}</p>
          <p>You hobbies are {person.hobbies}</p>
          <p>{person.name} Studies at: </p>
          <Address
            streetAddress={person.streetAddress}
            suburb={person.suburb}
            postCode={person.postCode}
            city={person.city}
            country={person.country}
          />
        </div>
      ))}
    </>
  );
}

export default Persons;

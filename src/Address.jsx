import React from "react";
import Country from './Country'

function Address(props) {
  return (
    <>
      <p>{props.streetAddress}</p>
      <p>{props.suburb}</p>
      <p>{props.postCode}</p>
      <p>{props.city}</p>
      <Country country={props.country}/>
    </>
  );
}

export default Address;

import React from "react";

function Person (props) {
  return (  
    <div className="container">
    <div className="row blue">
      <h2>{props.firstname} {props.middlename} {props.lastname}</h2>
      </div>
      <div className="row">
      <div className="col-9">
  <p>Birth on {props.birthdate}</p>
  <p>Married on {props.marriagedate}</p>
  <p>Death on {props.deathdate}</p>
  <p>Aged {props.age}</p>
      </div>
    </div>
  <p>Welcome to page 2</p>
  </div>
)
}

export default Person;

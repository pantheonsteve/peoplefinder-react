import React from "react";

function Person (props) {
    return (  
      <tr>
      <td>{props.firstname}</td>
      <td>{props.middlename}</td>
      <td>{props.lastname}</td>
      <td>{props.birthdate}</td>
      <td>{props.birthplace}</td>
      <td>{props.marriagedate}</td>
      <td>{props.deathdate}</td>
      <td>{props.deathplace}</td>
      <td>{props.age}</td>
    </tr>
  )
}

export default Person;

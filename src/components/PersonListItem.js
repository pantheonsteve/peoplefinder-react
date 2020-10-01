import React from 'react';

function PersonListItem (props) {
    return (
        <div className="card">
            <div className="card-body">
            <h2 className="card-title">{props.firstname} {props.middlename} {props.lastname}</h2>
            <ul className="card-text">
                <li>Born: {props.birthdate} in {props.birthplace}</li>
                <li>Married: {props.marriagedate}</li>
                <li>Died: {props.deathdate} in {props.deathplace} at the age of {props.age}</li>
            </ul> 
            </div>
        </div>
  )
}

export default PersonListItem;
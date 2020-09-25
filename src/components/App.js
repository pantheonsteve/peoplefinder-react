import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import firebase from './Firebase';
import Person from './Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('People');
    this.unsubscribe = null;
    this.state = {
      people: []
    };
    console.log('constructor');
  }

  onCollectionUpdate = (querySnapshot) => {
    const persons = [];
    querySnapshot.forEach((doc) => {
      const { first_name, middle_name, last_name, birth_date, birth_location, married_date, death_date, death_location } = doc.data();
      persons.push({
        key: doc.id,
        doc,
        first_name, 
        middle_name, 
        last_name, 
        birth_date, 
        birth_location, 
        married_date, 
        death_date, 
        death_location,
      });
  });
    this.setState({people: persons});
    console.log('onCollectionUpdate');
    console.log(this.state.people);
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    console.log('componenteDidMount');
    console.log(this.state.people);
  }

  render() {
    console.log('render');
    console.log(this.state.people);
    console.log(Object.keys(this.state.people));
    console.log(Object.entries(this.state.people));
    console.log(Object.entries(this.state.people));
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              PEOPLE LIST
            </h3>
            <div className="panel-body">
            <h4><Link to="/create">Add Person</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Middle Name</th>
                  <th>Last Name</th>
                  <th>Birthdate</th>
                  <th>Birth Location</th>
                  <th>Marriage Date</th>
                  <th>Death Date</th>
                  <th>Death Location</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
              {this.state.people.map(person => 
              <Person key={person.key}
              firstname={person.first_name} 
              middlename={person.middle_name} 
              lastname={person.last_name}
              birthdate={new Date(person.birth_date.seconds*1000).toLocaleDateString('en-US')}
              birthplace={person.birth_location}
              marriagedate={new Date(person.married_date.seconds*1000).toLocaleDateString('en-US')}
              deathdate={new Date(person.death_date.seconds*1000).toLocaleDateString('en-US')}
              deathplace={person.death_location}
              age ={Math.floor((person.death_date.seconds - person.birth_date.seconds)/60/60/24/365)}
              />
            )}
              </tbody>
            </table>
          </div>
          </div>
 
        </div>
      </div>
    );
  }
}

export default App;

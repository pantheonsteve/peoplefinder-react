import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import firebase from './Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

    constructor() {
        super();
        this.ref = firebase.firestore().collection('People');
        this.state = {
            first_name: '',
            middle_name: '',
            last_name: '',
            birth_date: '',
            married_date: '',
            death_date: '',
            birth_location: '',
            death_location: ''
        };
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { first_name, middle_name, last_name, birth_date, birth_location, married_date, death_date, death_location } = this.state;

        this.ref.add({
            first_name,
            middle_name,
            last_name,
            birth_date,
            married_date,
            death_date,
            birth_location,
            death_location
        }).then((docRef) => {
            this.setState({
                first_name: '',
                middle_name: '',
                last_name: '',
                birth_date: '',
                married_date: '',
                death_date: '',
                birth_location: '',
                death_location: ''
            });
            this.props.history.push("/")
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    render() {
        const { first_name, middle_name, last_name, birth_date, birth_location, married_date, death_date, death_location } = this.state;
        return (
            <div class="container">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">
                  ADD PERSON
                </h3>
              </div>
              <div class="panel-body">
                <h4><Link to="/" class="btn btn-primary">Person List</Link></h4>
                <form onSubmit={this.onSubmit}>
                  <div class="form-group">
                    <label for="first_name">First Name:</label>
                    <input type="text" class="form-control" name="first_name" value={first_name} onChange={this.onChange} placeholder="First Name" />
                  </div>
                  <div class="form-group">
                    <label for="middle_name">Middle Name:</label>
                    <input type="text" class="form-control" name="middle_name" value={middle_name} onChange={this.onChange} placeholder="Middle Name" />
                  </div>
                  <div class="form-group">
                    <label for="last_name">Last Name:</label>
                    <input type="text" class="form-control" name="last_name" value={last_name} onChange={this.onChange} placeholder="Last Name" />
                  </div>
                  <div class="form-group">
                    <label for="birth_date">Birth Date:</label>
                    <input type="date" class="form-control" name="birth_date" value={birth_date} onChange={this.onChange} placeholder="Birth Date" />
                  </div>
                  <div class="form-group">
                    <label for="birth_location">Birth Place:</label>
                    <input type="text" class="form-control" name="birth_location" value={birth_location} onChange={this.onChange} placeholder="Birth Place" />
                  </div>
                  <div class="form-group">
                    <label for="death_date">Death Date:</label>
                    <input type="date" class="form-control" name="death_date" value={death_date} onChange={this.onChange} placeholder="Death Date" />
                  </div>
                  <div class="form-group">
                    <label for="married_date">Marriage Date:</label>
                    <input type="date" class="form-control" name="married_date" value={married_date} onChange={this.onChange} placeholder="Marriage Date" />
                  </div>
                  <div class="form-group">
                    <label for="death_location">Death Place:</label>
                    <input type="text" class="form-control" name="death_location" value={death_location} onChange={this.onChange} placeholder="Death Place" />
                  </div>
                  <button type="submit" class="btn btn-success">Submit</button>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default Create;

import React, { Component } from 'react';
import firebase from '../data/Firebase';

class Test extends Component {
    constructor(){
        super();
        this.ref = firebase.firestore().collection('Test');
        this.state = {
            date: ''
        }
    }

    onSubmit = (e) => {
        console.log(this.state);
    }

    render() {
        return(
        <form onSubmit={this.onSubmit}>
            <div class="form-group">
            <label for="first_name">Date:</label>
            <input type="date" class="form-control" name="first_name" value={this.state.date} onChange={this.onChange} placeholder="First Name" />
            </div>
            <div className="form-group">
                <input type="submit" />
            </div>
        </form>
    );
    }
}

export default Test;
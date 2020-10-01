import React, { Component } from 'react';
import firebase from '../data/Firebase';
import { Link } from 'react-router-dom';

class Person extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person: {},
            key: ''
        };
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('People').doc(this.props.match.params.id);
        console.log(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                this.setState({
                    person: doc.data(),
                    key: doc.id,
                    isLoading: false
                });
            } else {
                console.log("Document doesn't exist");
            }
        });
    }

    delete(id) {
        firebase.firestore().collection('People').doc(id).delete().then(() => {
            console.log("Document successfully deleted");
            this.props.history.push("/")
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    render() {
        return (
          <div class="container">
            <div class="panel panel-default">
              <div class="panel-heading">
              <h4><Link to="/">Person List</Link></h4>
                <h1>{this.state.person}</h1>
                <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
                <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        );
    }
}
    
export default Person;
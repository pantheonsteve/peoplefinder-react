import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header';
import PersonList from './PersonList';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <PersonList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

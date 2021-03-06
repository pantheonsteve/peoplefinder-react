import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Edit from './components/Edit';
import CreateForm from './components/Create';
import Person from './components/Person';
import PersonProfile from './pages/PersonProfile';
import Test from './pages/Test';
//import Header from './components/Header';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/profile:id' component={PersonProfile} />
      <Route path='/edit:id' component={Edit} />
      <Route path='/person/:id' component={Person} />
      <Route path='/create' component={CreateForm} />
      <Route path='/Test' component={Test} />
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

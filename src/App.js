import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './css/App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Message from './components/Message';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
	      <Router>
		      <div className="Task-App">
			      <Message />
			      <TaskForm />
			      <br/>
			      <Route
				      path='/:filter?'
				      render = {({match}) =>(
				      	<TaskList filter={match.params.filter}
				        />
			      )}/>
			      <Footer/>
	        </div>
	      </Router>
      </div>
    )
  }
}

export default App;

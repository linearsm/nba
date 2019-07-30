import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Navbar from './Components/Navbar/Navbar';


class AppRouter extends Component {

  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.state = {
      isLogged: false
    }
  }

  componentWillMount() {

    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      this.setState({
        isLogged: true,
      })
    } else {
      this.setState({
        isLogged: false,
      })
    }
  }

  logout() {
    localStorage.removeItem('user')

    this.setState({
      isLogged: false
    })

  }

  login() {

    this.setState({
      isLogged: true
    })
  }

  render() {

    return (
      <Router>
        <div className="App">
          <Navbar isLogged={this.state.isLogged} logout={this.logout} /> 
          
        </div>
      </Router >
    );
  }
}

export default AppRouter;

import logo from "./logo.svg";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import ContactsList from "./components/ContactsList";
import Login from "./components/Login";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", photo: "" };
    this.setHeader = this.setHeader.bind(this);
  }

  setHeader(data) {
    this.setState({ name: data.name, email: data.email, photo: data.photo });
  }

  render() {
    return (
      <Router>
        <div>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr /> */}

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <Login></Login>
            </Route>
            <Route path="/contacts">
              <Header details={this.state} ></Header>
              <ContactsList setHeader={this.setHeader}></ContactsList>
            </Route>
            <Route path="/dashboard">
              <ContactsList></ContactsList>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

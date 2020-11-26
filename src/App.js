import logo from "./logo.svg";
import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import ContactsList from "./components/ContactsList"
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <ContactsList></ContactsList>
        
      </div>
    );
  }
}

export default App;

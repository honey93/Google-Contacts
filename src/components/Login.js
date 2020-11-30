import React from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router";
import styled from "styled-components";
import loginBg from "../icons/loginBackground.svg";

import axios from "axios";

import Google from "../icons/Login.svg";

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${loginBg});
  background-size: cover;
`;

const LoginContainer = styled.div`
  width: 483px;
  height: 180px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(5, 62, 209, 0.19);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonGoogle = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  cursor: pointer;
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contact: false, url: "" };
    this.handleClick = this.handleClick.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  componentWillMount() {
    axios.get(process.env.REACT_APP_GOOGLE).then(res => {
      this.setState({ url: res.data.url });
    });
  }

  handleClick(e) {

    window.location.href = this.state.url;
  }

  responseGoogle(res) {
    console.log(res);
  }

  render() {

    return (
      <Main>
        <LoginContainer>
          <h1>Google Contact List</h1>

          <ButtonGoogle onClick={this.handleClick}>
            <img src={Google} /> Signin with Google
          </ButtonGoogle>
        </LoginContainer>
      </Main>
    );
  }
}

export default Login;

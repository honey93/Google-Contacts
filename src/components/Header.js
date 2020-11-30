import React from "react";
import headerSvg from "../icons/Header_bar.svg";
import Logout from "../icons/Logout.svg";
import styled from "styled-components";

const HeaderParent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 78px;
  background-size: cover;
  background-image: url(${headerSvg});
  color: white;
  padding: 0 60px;
  box-sizing: border-box;
`;

const Image = styled.img`
border-radius:50%;
`;

const HeaderChildLeft = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
`;

const HeaderChildText = styled.div`
  margin-left: 14px;
`;

const UserName = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

const HeaderChildRight = styled.div``;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeaderParent>
        <HeaderChildLeft>
          <div>
            <Image src={this.props.details.photo} width="40" />
          </div>

          <HeaderChildText>
            <UserName>{this.props.details.name}</UserName>
            <div>{this.props.details.email}</div>
          </HeaderChildText>
        </HeaderChildLeft>

        <HeaderChildRight>
          <img src={Logout} />
        </HeaderChildRight>
      </HeaderParent>
    );
  }
}

export default Header;

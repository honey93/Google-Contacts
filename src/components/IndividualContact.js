import React from "react";

import bin from "../icons/bin-2-alternate.svg";

import styled from "styled-components";

const AddressTile = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(5, 62, 209, 0.14);
  border-radius: 8px;
  color: black;
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  padding-left: 48px;
  padding-right: 120px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  box-sizing:border-box;

  border: ${props => props.primary ? "1px solid #4EB4FF" : "0 solid #4EB4FF"}
`;

const PhotoName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 33%;
  box-size: border-box;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
  }
`;

const Image = styled.img`
  border-radius: 50%;
`;

const ActualName = styled.div`
  margin-left: 10px;
`;

const Email = styled.div`
  text-align: left;
  width: 33%;
  box-size: border-box;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
  }
`;

const Phone = styled.div`
  text-align: left;
  width: 33%;
  box-size: border-box;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
  }
`;
class IndividualContact extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = { hoverFlag: false };

    this.changeBackground = this.changeBackground.bind(this);
  }

  changeBackground(status) {
    // e.target.style.borderColor = "#4EB4FF";

    this.setState({ hoverFlag: status });
  }

  render() {
    let binf,check;
    if (this.state.hoverFlag) {
      binf = <img src={bin} />;
      check = <input type="checkbox" />;
    } else {
      binf = "";
      check = "";
    }

   


    return (
      <AddressTile primary={this.state.hoverFlag}
        onMouseOver={()=>{this.changeBackground(true)}}
        onMouseOut={()=>{this.changeBackground(false)}}
      >
      {check}
        <PhotoName>
          {" "}
          <Image src={this.props.details.photo} width="30" />{" "}
          <ActualName> {this.props.details.name} </ActualName>{" "}
        </PhotoName>
        <Email> {this.props.details.email}</Email>
        <Phone> {this.props.details.phone} </Phone>

        {binf}
      </AddressTile>
    );
  }
}

export default IndividualContact;

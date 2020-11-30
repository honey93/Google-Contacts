import React from "react";

import Person from "../icons/Person.svg";

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
    align-items:flex-start;
    
  }
`;

const PhotoName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
`;

const Image = styled.img`
border-radius:50%;
`;

const ActualName = styled.div`
  margin-left: 10px;
`;


const Email = styled.div`
text-align:left;
`;

const Phone = styled.div`
text-align:left;
`;
class IndividualContact extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <AddressTile>
        <PhotoName>
          {" "}
          <Image src={this.props.details.photo} width="30" /> <ActualName> {this.props.details.name} </ActualName>{" "}
        </PhotoName>
        <Email> {this.props.details.email}</Email>
        <Phone> {this.props.details.phone} </Phone>
      </AddressTile>
    );
  }
}


export default IndividualContact;

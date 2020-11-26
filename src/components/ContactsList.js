import React from "react";
import backImage from "../icons/Background.svg";
import Person from "../icons/Person.svg";
import styled from "styled-components";
import IndividualContact from "./IndividualContact";
const ListParent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-size: cover;
  background-image: url(${backImage});
  color: white;
  padding: 0 189px;
  box-sizing: border-box;
`;

const ContactsHeading = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 87px;
`;
const ContactsTitle = styled.div`
  color: #053ed1;
  font-size: 26px;
  font-weight: 500;
`;

const Count = styled.div`
  color: #053ed1;
  font-size: 16px;
  font-weight: 400;
  margin-left: 10px;
`;


class ContactsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListParent>
        <ContactsHeading>
          <ContactsTitle>Contacts</ContactsTitle>
          <Count> (170)</Count>
        </ContactsHeading>

        <IndividualContact />
        <IndividualContact />
        <IndividualContact />
        <IndividualContact />
        <IndividualContact />
        <IndividualContact />
        <IndividualContact />
        <IndividualContact />
        <IndividualContact />
        <IndividualContact />
        <IndividualContact />
        <IndividualContact />
        <IndividualContact />
        <IndividualContact />
        <IndividualContact />

        

 
        
      </ListParent>
    );
  }
}

export default ContactsList;

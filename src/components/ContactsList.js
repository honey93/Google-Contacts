import React from "react";
import backImage from "../icons/Background.svg";
import styled from "styled-components";
import IndividualContact from "./IndividualContact";
import axios from "axios";

import * as qs from "query-string";
const ListParent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-size: cover;
  background-image: url(${backImage});
  color: white;
  padding: 0 189px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 10px;
  }
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

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
  font-size: 58px;
`;

class ContactsList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { contacts: [], myDetails: {} };
  }

  componentDidMount() {
    // const query = new URLSearchParams(this.props.location.search);
    const query = qs.parse(window.location.search);
    //console.log(query.code);

    let token = query.code;

    axios
      .get(process.env.REACT_APP_CONTACTS + `?code=${token}`)
      .then(response => {
        // handle success
        //alert(JSON.stringify(response.data));

        this.setState({
          contacts: response.data.contacts,
          myDetails: response.data.myDetails
        });
        this.props.setHeader({
          name: response.data.myDetails.names[0].displayName,
          email: response.data.myDetails.emailAddresses[0].value,
          photo: response.data.myDetails.photos[0].url
        });
        //console.log(response);
      })
      .catch(function(error) {
        // handle error
        //alert("error", error);
        console.log(error);
      });
  }

  render() {
    const contacts = this.state.contacts.map(iContact => {
      let result = (
        <IndividualContact
          details={{
            name: iContact.names[0].displayName,
            email: iContact.emailAddresses
              ? iContact.emailAddresses[0].value
              : "",
            phone: iContact.phoneNumbers ? iContact.phoneNumbers[0].value : "",
            photo: iContact.photos ? iContact.photos[0].url : ""
          }}
        />
      );
      return result;
    });

    if (this.state.contacts.length == 0) {
      return <Loading>Loading . . .</Loading>;
    }
    return (
      <ListParent>
        <ContactsHeading>
          <ContactsTitle>Contacts</ContactsTitle>
          <Count> ({this.state.contacts.length})</Count>
        </ContactsHeading>
        {contacts}
      </ListParent>
    );
  }
}

export default ContactsList;

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
`;

const PhotoName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ActualName = styled.div`
  margin-left: 10px;
`;

class IndividualContact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AddressTile>
        <PhotoName>
          {" "}
          <img src={Person} /> <ActualName> Adrian Simpson </ActualName>{" "}
        </PhotoName>
        <div> simpsonadrian@bee.com </div>
        <div> 9924191992 </div>
      </AddressTile>
    );
  }
}


export default IndividualContact;

import { Input, Modal, Divider } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles";
import MapComponent from "./MapComponent";
import WriteTour from "./WriteTour";
import SurpriseTour from "./SurpriseTour";
const { TextArea } = Input;
const CategoryPicker = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  .category {
    background-color: #f9f9f9;
    border-radius: 12px;
    width: 33%;
    border: 2px solid lightgray;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0px 10px;
    box-sizing: border-box;

    img {
      margin: auto;
      display: block;
      margin-top: 20px;
      height: 40px;
    }

    h3 {
      text-align: center;
    }

    p {
      text-align: center;
    }
  }

  .active {
    border-color: ${colors.primary};
  }
`;

const FormContainer = styled.section`
  padding: 50px 0px;
`;

function CustomTourModal(props) {
  const [active, setActive] = useState(1);
  const { open } = props;

  const forms = [
    <WriteTour />,
    <div>
      <MapComponent />
    </div>,
    <SurpriseTour />,
  ];

  return (
    <Modal
      title="Create yout custom tour"
      open={open}
      onCancel={() => props.setOpenModal(false)}
      width={1000}
    >
      <p>
        Explore Madeira your way. Tell us where you want to go, choose places on
        the map, or let us surprise you with a personalized route.
      </p>
      <CategoryPicker>
        <div
          onClick={() => setActive(1)}
          className={"category " + (active == 1 && "active")}
        >
          <img src="/icons/edit.svg" alt="" />
          <h3>Write your own tour</h3>
          <p>Tell us places you'd like to visit in Madeira</p>
        </div>
        <div
          onClick={() => setActive(2)}
          className={"category " + (active == 2 && "active")}
        >
          <img src="/icons/pin.svg" alt="" />
          <h3>Pick on the Map</h3>
          <p>Place pins on the map to build your ideal route</p>
        </div>
        <div
          onClick={() => setActive(3)}
          className={"category " + (active == 3 && "active")}
        >
          <img src="/icons/surprise.svg" alt="" />
          <h3>Surprise Us</h3>
          <p>We will contact you to leran what you're looking for</p>
        </div>
      </CategoryPicker>
      <FormContainer>{forms[active - 1]}</FormContainer>
    </Modal>
  );
}

export default CustomTourModal;

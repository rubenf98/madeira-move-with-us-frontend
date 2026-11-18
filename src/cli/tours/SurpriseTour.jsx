import { Input, Modal, Divider } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
const { TextArea } = Input;
import background from "../../assets/header.png";

const Container = styled.div`
  display: flex;
  align-items: stretch;
  gap: 30px;

  .image-container {
    flex: 0 0 45%;
    position: relative;
    min-width: 0;

    .main-image {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
      inset: 0;
    }
  }

  .textarea-container {
    flex: 1;
    min-width: 0;
    box-sizing: border-box;

    h3 {
      font-weight: bold;
      font-size: clamp(16px, 2vw, 24px);
      margin: 0;
    }
    p {
      margin-bottom: 40px;
    }
  }
`;

function SurpriseTour() {
  return (
    <Container>
      <div className="image-container">
        <img className="main-image" src={background} alt="" />
      </div>

      <div className="textarea-container">
        <h3>Tell us a bit about your expectations</h3>
        <p>
          Share your interests and preferences, and we'll get in touch to create
          a tailor-made tour for you.
        </p>

        <TextArea
          rows={4}
          placeholder="Talk about what you expect and want from your trip. Tell us what you like and we'll build a tour for you."
        />
      </div>
    </Container>
  );
}

export default SurpriseTour;

import { Input, Modal, Divider } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
const { TextArea } = Input;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  .textarea-container {
    width: 60%;
    border-right: 1px solid lightgray;
    padding-right: 50px;
    box-sizing: border-box;

    p {
      font-weight: bold;
      font-size: clamp(16px, 2vw, 24px);
      margin-top: 0px;
    }
  }

  .highlights {
    font-weight: bold;
    div {
      margin: 10px 0px;
      display: flex;
      gap: 5px;
    }
  }
`;

function WriteTour() {
  return (
    <Container>
      <div className="textarea-container">
        <p>Where would you like to go?</p>
        <TextArea
          rows={4}
          placeholder="List place you'd like to visit. e.g. Pico do Arieiro, Porto Moniz, Fanal Forest..."
          maxLength={6}
        />
      </div>

      <div className="highlights">
        <div>
          <img src="" alt="" />
          Private van with a local driver
        </div>
        <div>
          <img src="" alt="" />
          Visit the places you choose
        </div>
        <div>
          <img src="" alt="" />
          Flexible schedule
        </div>
        <div>
          <img src="" alt="" />
          Ideal for couples, families or small groups
        </div>
      </div>
    </Container>
  );
}

export default WriteTour;

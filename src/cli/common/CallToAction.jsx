import React from "react";
import styled from "styled-components";
import { colors, SectionContainer } from "../../styles";

const Container = styled(SectionContainer)`
  background-image: url("/line_background.svg");
  padding: 100px 0px 150px 0px;
  box-sizing: border-box;
  border-radius: 40px;

  h3 {
    text-align: center;
    color: white;
    font-size: clamp(26px, 3vw, 60px);
    margin-bottom: 10px;
  }

  p {
    text-align: center;
    color: white;
    font-size: clamp(18px, 3vw, 30px);
    margin: 30px auto;
  }

  button {
    margin: auto;
    display: block;
    border-radius: 12px;
    background-color: white;
    color: ${colors.primary};
    padding: 16px 30px;
    box-sizing: border-box;
    font-weight: bold;
    border: 0px;
    box-shadow: 0px;
    cursor: pointer;
    font-size: clamp(16px, 3vw, 18px);

    img {
      height: 100%;
    }

    span {
      padding: 6px 16px;
      box-sizing: border-box;
    }
  }
`;

function CallToAction() {
  return (
    <Container>
      <h3>Ready to roll?</h3>
      <p>Your adventure awaits</p>
      <button>Book now</button>
    </Container>
  );
}

export default CallToAction;

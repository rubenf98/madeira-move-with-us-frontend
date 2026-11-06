import React from "react";
import styled from "styled-components";
import background from "../../assets/header.png";
import { WhiteButton } from "../../styles";
// import main from "../assets/images/header_main.jpg";
// import mainRight from "../assets/images/header_right.jpg";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: calc(100dvh - 100px);
  max-height: 1920px;
  align-items: center;
  justify-content: center;
  padding: 20px 50px;
  box-sizing: border-box;
  position: relative;

  .background {
    width: 100%;
    height: calc(100% + 100px);
    z-index: -1;
    position: absolute;
    object-fit: cover;
    top: -100px;
    left: 0;
  }
`;

const InfoContainer = styled.section`
  width: 100%;
  margin: auto;
  max-width: 1440px;
  color: white;
  padding-bottom: 150px;

  h1 {
    font-size: clamp(20px, 5vw, 90px);
    line-height: 100%;
    margin-bottom: 0px;
  }

  p {
    width: 50%;
    font-size: 22px;
    margin: 30px 0px;
  }

  @media (max-width: 768px) {
    padding: 0px 10px;
    p {
      width: 100%;
    }
  }
`;

function Header() {
  return (
    <Container>
      <img className="background" src={background} alt="" />
      <InfoContainer>
        <div>
          <h1>
            Experiences Created, <br></br> memories Forever.
          </h1>
          <p>
            Break away from standard routes. Discover incredible landscapes and
            hidden treasures with premium island-wide transfers and custom
            off-road excursions.
          </p>
          <WhiteButton style={{ fontSize: "20px" }}>
            <img src="/icons/primary_arrow.svg" alt="arrow"></img>
            <span>Book now</span>
          </WhiteButton>
        </div>
      </InfoContainer>
    </Container>
  );
}

export default Header;

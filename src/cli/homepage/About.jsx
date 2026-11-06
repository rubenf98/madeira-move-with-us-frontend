import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../../styles";
import Image from "../../assets/homepage_about.png";

const Container = styled.section`
  width: 100%;
  margin: 150px auto;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  gap: 80px;

  h2 {
    font-size: clamp(28px, 4vw, 70px);
    margin: 0px 0px 20px 0px;
    line-height: 110%;
  }

  .paragraphs {
    display: flex;
    align-items: start;
    gap: 30px;
    text-align: justify;
    font-size: clamp(16px, 2vw, 18px);
    font-weight: 300;
    margin: 20px 0px;
  }
`;

function About() {
  return (
    <Container>
      <div>
        <h2>Inspired by Clients, Driven by Comfort</h2>
        <div className="paragraphs">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu.{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare.
          </p>
        </div>
        <PrimaryButton>
          <span>Get to know us</span>
        </PrimaryButton>
      </div>
      <img src={Image} alt="Seixal from drone perspective"></img>
    </Container>
  );
}

export default About;

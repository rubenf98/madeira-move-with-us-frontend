import React from "react";
import styled from "styled-components";

import { SectionContainer } from "../../styles";
import { Link } from "react-router-dom";

const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  .service {
    margin-top: 50px;
    width: 33%;
    position: relative;
    color: white;
    min-height: 600px;
    display: flex;
    align-items: end;
    padding: 15px 20px;
    box-sizing: border-box;

    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
      border-radius: 40px;
    }

    h3 {
      margin-bottom: 10px;
      font-size: clamp(24px, 2vw, 30px);
    }

    .flex {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 20px;

      p {
        margin-top: 0px;
        width: 60%;
      }
    }
  }
`;

function Services() {
  return (
    <SectionContainer id="services">
      <h2>Custom services just for you</h2>
      <p>
        Discover the most exciting ways to explore the mountains — from extreme
        rides to climbing and guided tours.
      </p>
      <ServicesContainer>
        <div className="service">
          <img className="background" src="/transfers.png" alt="background" />
          <div>
            <h3>Transfers</h3>
            <div className="flex">
              <p>Chegadas e partidas sem stress. Estamos à sua espera.</p>
              <Link to="/services/transfers">
                <img src="/icons/white_round_arrow.svg" alt="arrow" />
              </Link>
            </div>
          </div>
        </div>

        <div className="service">
          <img className="background" src="/tours.png" alt="background" />
          <div>
            <h3>Tours personalizados</h3>
            <div className="flex">
              <p>Descruba paisagens incríveis e locais únicos só para si.</p>
              <Link to="/services/tours">
                <img src="/icons/white_round_arrow.svg" alt="arrow" />
              </Link>
            </div>
          </div>
        </div>

        <div className="service">
          <img className="background" src="/experiences.png" alt="background" />
          <div>
            <h3>Experiências da natureza</h3>
            <div className="flex">
              <p>
                Faça caminhadas ou vá ver o pôr do sol sem se preocupar com
                estacionamento.
              </p>
              <Link to="/services/experiences">
                <img src="/icons/white_round_arrow.svg" alt="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </ServicesContainer>
    </SectionContainer>
  );
}

export default Services;

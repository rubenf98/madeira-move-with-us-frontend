import React from "react";
import { PrimaryButton, SectionContainer } from "../../styles";
import Image from "../../assets/cropped_car.png";
import styled from "styled-components";

const Content = styled.section`
  display: flex;
  justify-content: space-between;

  h2 {
    margin-right: -300px;
    z-index: 2;
  }

  .info {
    width: 30%;
  }

  .car {
    width: 70%;
    z-index: -2;
  }

  .clients-container {
    width: 80%;
    z-index: 2;
    display: flex;
    /* justify-content: flex-end; */
    margin-left: 50px;
    position: relative;
    margin-bottom: 50px;

    .arrow {
      /* width: 30%; */
    }
  }
`;

function BookReminder() {
  return (
    <SectionContainer>
      <Content>
        <div className="info">
          <h2>Fast, Reliable Transports Services For Every Journey</h2>
          <div className="clients-container">
            <div>
              <img className="clients" src="/client_images.png" alt="" />
              <p>Over 3000 5.0 Star Ratings</p>
            </div>
            <img className="arrow" src="/icons/accent_arrow.svg" alt="" />
          </div>

          <p>
            Book your ride in minutes with professional drivers, comfortable
            vehicles, and on-time pickups for airport transfers, city rides, and
            business travel.
          </p>

          <PrimaryButton>
            <img src="/icons/white_arrow.svg" alt="arrow"></img>

            <span>Book now</span>
          </PrimaryButton>
        </div>
        <img className="car" src={Image} alt="" />
      </Content>
    </SectionContainer>
  );
}

export default BookReminder;

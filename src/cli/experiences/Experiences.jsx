import React from "react";
import ServiceHeader from "../common/ServiceHeader";
import { colors, SectionContainer } from "../../styles";
import styled from "styled-components";
import Faq from "../common/Faq";
import Reviews from "../homepage/Reviews";

const ToursContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  gap: 50px;
  margin-top: 50px;

  .transfer-container {
    width: calc(33% - 50px);
    align-items: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;

    .main-image {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    .content {
      flex: 1;
      padding: 20px;
      box-sizing: border-box;
      background-color: white;
      box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.3);
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;

      .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;

        .price {
          gap: 5px;
          display: flex;
          align-items: flex-end;
          color: ${colors.primary};
          font-size: 26px;
          font-weight: bold;
          span {
            font-weight: 300;
            color: black;
            font-size: 14px;
            margin-bottom: 2px;
          }
        }

        button {
          background-color: transparent;
          border: 0px;
          cursor: pointer;
        }
      }
    }
  }
`;

const tours = [
  {
    id: 1,
    image: "/Rectangle 19.png",
    title: "Santana West Tour",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. ",
  },
  {
    id: 2,
    image: "/Rectangle 19.png",
    title: "Porto Moniz East Tour",
    price: 160,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. ",
  },
];

function Experiences() {
  return (
    <div>
      <ServiceHeader
        images={[
          "/Rectangle 19.png",
          "/Rectangle 19.png",
          "/Rectangle 19.png",
          "/Rectangle 19.png",
        ]}
      />

      <SectionContainer style={{ marginTop: "50px" }}>
        <h2>Enjoy Madeira’s nature activities without worries</h2>
        <p>
          We will take you to the best nature spots and pick you up when you're
          done. No hassle, just enjoy the best of Madeira Island
        </p>
        <ToursContainer>
          {tours.map((transfer) => (
            <div className="transfer-container" id={transfer.id}>
              <img
                className="main-image"
                src={transfer.image}
                alt={transfer.title}
              />
              <div className="content">
                <h4>{transfer.title}</h4>
                <p>{transfer.description}</p>
                <div className="footer">
                  <div className="price">
                    <span>from</span>
                    {transfer.price}€
                  </div>
                  <button>
                    <img
                      className="arrow"
                      src="/icons/primary_arrow.svg"
                      alt="arrow"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="transfer-container">
            <img className="main-image" src="/custom_tour.jpg" />
            <div className="content">
              <h4>Personalized Itinerary</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Ut et massa mi.
              </p>
              <div className="footer">
                <div className="price"></div>
                <button>
                  <img
                    className="arrow"
                    src="/icons/primary_arrow.svg"
                    alt="arrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </ToursContainer>

        <Reviews />
        <Faq />
      </SectionContainer>
    </div>
  );
}

export default Experiences;

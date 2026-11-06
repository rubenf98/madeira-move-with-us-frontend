import React from "react";
import ServiceHeader from "../common/ServiceHeader";
import { colors, SectionContainer } from "../../styles";
import styled from "styled-components";
import TransferForm from "./TransferForm";
import Faq from "../common/Faq";

const CustomTransferContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  flex-wrap: wrap;
  margin-top: 100px;

  .transfer-container {
    width: calc(50% - 50px);

    .main-image {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    .content {
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
const AirportTransferContainer = styled.section`
  margin: 150px auto;
  .transfer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    width: 100%;
    margin: 50px 0px;

    .main-image {
      width: 40%;
      object-fit: cover;
      border-radius: 20px;
    }

    .content {
      width: 60%;

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h4 {
          font-size: clamp(20px, 3vw, 28px);
          margin: 0px;
        }

        img {
          width: 25px;
        }

        .flex {
          gap: 20px;
          display: flex;
          flex-wrap: nowrap;
        }

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
      }

      p {
        margin: 30px 0px;
      }

      button {
        background-color: transparent;
        border: 0px;
        cursor: pointer;
      }
    }
  }
`;

const airportTransfers = [
  {
    id: 1,
    image: "/Rectangle 19.png",
    title: "Aeroporto - Funchal",
    price: 30,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. ",
  },
  {
    id: 2,
    image: "/Rectangle 19.png",
    title: "Aeroporto - Funchal",
    price: 30,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. ",
  },
];

const customTransfers = [
  {
    id: 1,
    image: "/Rectangle 19.png",
    title: "Aeroporto - Funchal",
    price: 30,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. ",
  },
  {
    id: 2,
    image: "/Rectangle 19.png",
    title: "Aeroporto - Funchal",
    price: 30,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. ",
  },
  {
    id: 3,
    image: "/Rectangle 19.png",
    title: "Aeroporto - Funchal",
    price: 30,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. ",
  },
  {
    id: 4,
    image: "/Rectangle 19.png",
    title: "Aeroporto - Funchal",
    price: 30,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. ",
  },
];

function Transfers() {
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
        <AirportTransferContainer>
          <h2>Airport Transfers for every occasion</h2>
          {airportTransfers.map((transfer) => (
            <div className="transfer-container" id={transfer.id}>
              <img
                className="main-image"
                src={transfer.image}
                alt={transfer.title}
              />
              <div className="content">
                <div className="header">
                  <div className="flex">
                    <h4>{transfer.title}</h4>
                    <img src="/icons/switch.svg" alt="switch" />
                  </div>
                  <div className="price">
                    <span>from</span>
                    {transfer.price}€
                  </div>
                </div>
                <p>{transfer.description}</p>
                <button>
                  <img
                    className="arrow"
                    src="/icons/primary_arrow.svg"
                    alt="arrow"
                  />
                </button>
              </div>
            </div>
          ))}
        </AirportTransferContainer>

        <h2>Transfers with Incomparable flexibility</h2>
        <CustomTransferContainer>
          {customTransfers.map((transfer) => (
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
        </CustomTransferContainer>

        <TransferForm />

        <Faq />
      </SectionContainer>
    </div>
  );
}

export default Transfers;

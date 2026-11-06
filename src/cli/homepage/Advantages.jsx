import { Collapse } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  width: 100%;
  margin: 150px auto 50px auto;
  background-image: url("/line_background.svg");
  padding: 150px 0px 150px 0px;
  box-sizing: border-box;
`;

const Details = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 50px auto;
  display: flex;
  gap: 30px;
  justify-content: space-between;

  .detail {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    img {
      width: 50px;
    }

    div {
      p,
      h3 {
        margin: 3px 0px;
      }

      h3 {
        font-size: clamp(18px, 2vw, 26px);
      }
    }
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: "1440px") {
    padding: 0px 20px;
    box-sizing: border-box;
  }

  h2 {
    font-size: clamp(28px, 4vw, 70px);
    margin: 0px 0px 20px 0px;
    line-height: 110%;
  }

  .list-container {
    width: 50%;
    .ant-collapse-title {
      color: white;
      font-size: clamp(24px, 3vw, 36px);

      .title {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;

        img {
          width: 40px;
        }
      }
    }

    .ant-collapse-body {
      color: white;
      font-size: clamp(16px, 2vw, 18px);
    }

    .ant-collapse-item {
      /* border-radius: 0px;
      border-bottom: 2px solid white; */
      position: relative;
      padding-bottom: 20px;
      box-sizing: border-box;
      margin-top: 20px;
    }

    .ant-collapse-item:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 1px;
      width: 70%; /* or 100px */
      border-bottom: 2px solid white;
    }
  }

  .image-container {
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 3;
      position: relative;
    }

    .background {
      position: absolute;
      background-color: white;
      left: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      transform: rotate(7deg);
      z-index: 2;
      opacity: 0.3;
      border-radius: 20px;
    }
  }
`;

const text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
`;

const items = [
  {
    key: "1",
    label: (
      <div className="title">
        <img src="/icons/star.svg" alt="star" />
        Personalized Itineraries
      </div>
    ),
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: (
      <div className="title">
        <img src="/icons/star.svg" alt="star" />
        24/7 Services
      </div>
    ),
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: (
      <div className="title">
        <img src="/icons/star.svg" alt="star" />
        Expertise and Experiences
      </div>
    ),
    children: <p>{text}</p>,
  },
];

function Advantages() {
  const [activeAccordion, setActiveAccordion] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAccordion((prev) => {
        const next = Number(prev) + 1;
        return next > items.length ? "1" : String(next);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [activeAccordion]);

  return (
    <div>
      <SectionContainer>
        <Content>
          <div className="list-container">
            <Collapse
              accordion
              onChange={(e) => setActiveAccordion(e)}
              expandIcon={() => {}}
              activeKey={activeAccordion}
              defaultActiveKey={["1"]}
              ghost
              items={items}
            />
          </div>
          <div className="image-container">
            <div className="background" />
            <img src={"/advantages_" + activeAccordion + ".png"} alt="" />
          </div>
        </Content>
      </SectionContainer>
      <Details>
        <div className="detail">
          <img src="/icons/clients.svg" alt="" />
          <div>
            <h3>+5000</h3>
            <p>Staisfied customers</p>
          </div>
        </div>
        <div className="detail">
          <img src="/icons/years.svg" alt="" />
          <div>
            <h3>+10</h3>
            <p>Years of experience</p>
          </div>
        </div>
        <div className="detail">
          <img src="/icons/star2.svg" alt="" />
          <div>
            <h3>4.8/5</h3>
            <p>Customer reviews</p>
          </div>
        </div>
        <div className="detail">
          <img src="/icons/clients.svg" alt="" />
          <div>
            <h3>Madeira Island</h3>
            <p>Services across the island</p>
          </div>
        </div>
      </Details>
    </div>
  );
}

export default Advantages;

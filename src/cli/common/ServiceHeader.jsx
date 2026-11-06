import { Carousel } from "antd";
import React from "react";
import styled from "styled-components";

const Container = styled(Carousel)`
  img {
    max-height: 550px;
    height: 70vh;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .slick-dots {
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;

    li::after,
    li,
    li button {
      height: 12px !important;
    }
  }
`;

function ServiceHeader({ images }) {
  return (
    <Container autoplaySpeed={5000} autoplay dots>
      {images.map((image) => (
        <img src={image} alt="" />
      ))}
    </Container>
  );
}

export default ServiceHeader;

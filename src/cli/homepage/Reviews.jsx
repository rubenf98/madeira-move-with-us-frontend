import React, { useRef } from "react";
import { SectionContainer } from "../../styles";
import styled from "styled-components";
import { Carousel } from "antd";

const ReviewsContainer = styled(Carousel)`
  max-width: 1700px;
  width: 100%;
  margin: 0 auto;

  .slick-slide {
    padding: 0 15px;
    box-sizing: border-box;
  }

  .review {
    width: 100%;
    background-color: #f6efe6;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 15px;

    .header {
      display: flex;
      align-items: center;
      gap: 15px;

      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }
`;

const data = [
  {
    image: "/transfers.png",
    name: "Sarah Kathik",
    title: "Lorem ipsum dolor sit",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ut quod tenetur assumenda magnam commodi culpa officiis consectetur esse nobis modi minus, reprehenderit itaque reiciendis illum animi asperiores corporis odio!",
    location: "Santorini, Greece",
    rating: 4.6,
  },
  {
    image: "/transfers.png",
    name: "Sarah Kathik",
    title: "Lorem ipsum dolor sit",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ut quod tenetur assumenda magnam commodi culpa officiis consectetur esse nobis modi minus, reprehenderit itaque reiciendis illum animi asperiores corporis odio!",
    location: "Santorini, Greece",
    rating: 4.6,
  },
  {
    image: "/transfers.png",
    name: "Sarah Kathik",
    title: "Lorem ipsum dolor sit",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ut quod tenetur assumenda magnam commodi culpa officiis consectetur esse nobis modi minus, reprehenderit itaque reiciendis illum animi asperiores corporis odio!",
    location: "Santorini, Greece",
    rating: 4.6,
  },
  {
    image: "/transfers.png",
    name: "Sarah Kathik",
    title: "Lorem ipsum dolor sit",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ut quod tenetur assumenda magnam commodi culpa officiis consectetur esse nobis modi minus, reprehenderit itaque reiciendis illum animi asperiores corporis odio!",
    location: "Santorini, Greece",
    rating: 4.6,
  },
  {
    image: "/transfers.png",
    name: "Sarah Kathik",
    title: "Lorem ipsum dolor sit",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ut quod tenetur assumenda magnam commodi culpa officiis consectetur esse nobis modi minus, reprehenderit itaque reiciendis illum animi asperiores corporis odio!",
    location: "Santorini, Greece",
    rating: 4.6,
  },
  {
    image: "/transfers.png",
    name: "Sarah Kathik",
    title: "Lorem ipsum dolor sit",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ut quod tenetur assumenda magnam commodi culpa officiis consectetur esse nobis modi minus, reprehenderit itaque reiciendis illum animi asperiores corporis odio!",
    location: "Santorini, Greece",
    rating: 4.6,
  },
];

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  .arrows {
    display: flex;
    gap: 15px;

    button {
      color: white;
      background: transparent;
      border: 1px solid black;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      cursor: pointer;
      font-size: 40px;
      background-color: #9ddbb6;
      border: 0px;

      &:hover {
        background: #79ba93;
        color: white;
      }
    }
  }
`;

function Reviews() {
  const carouselRef = useRef(null);

  return (
    <SectionContainer>
      <Header>
        <h2>Real Stories from Happy Travelers</h2>

        <div className="arrows">
          <button
            type="button"
            onClick={() => carouselRef.current?.prev()}
            aria-label="Previous review"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => carouselRef.current?.next()}
            aria-label="Next review"
          >
            →
          </button>
        </div>
      </Header>

      <ReviewsContainer
        ref={carouselRef}
        infinite
        slidesToShow={3}
        slidesToScroll={1}
        dots={false}
        responsive={[
          {
            breakpoint: 1024,
            settings: { slidesToShow: 2 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 1 },
          },
        ]}
      >
        {data.map((review, index) => (
          <div key={index}>
            <div className="review">
              <div className="header">
                <img src={review.image} alt="" />
                <h3>{review.name}</h3>
              </div>

              <h4>{review.title}</h4>
              <p>{review.comment}</p>
              <p>Location: {review.location}</p>
              <p>Rating: {review.rating} ★</p>
            </div>
          </div>
        ))}
      </ReviewsContainer>
    </SectionContainer>
  );
}

export default Reviews;

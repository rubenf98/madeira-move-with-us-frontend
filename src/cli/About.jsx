import React from "react";
import { SectionContainer } from "../styles";
import Image1 from "../assets/about1.png";
import Image2 from "../assets/about2.png";
import styled from "styled-components";
import Faq from "./common/Faq";
import CallToAction from "./common/CallToAction";

const Container = styled(SectionContainer)`
  h2,
  h3 {
    text-align: center;
  }
  h3 {
    font-size: clamp(28px, 3vw, 40px);
  }

  .main-images {
    width: 100%;
  }

  .paragraphs {
    display: flex;
    justify-content: space-between;
    margin: 50px 0px;
    gap: 50px;
  }
`;

function About() {
  return (
    <Container>
      <h2>Born from a desire to explore</h2>
      <img className="main-images" src={Image1} alt="" />

      <h3>Lorem Ipsum Dolor Setum</h3>
      <div className="paragraphs">
        <div>
          <p>
            Welcome to Outlander, your gateway to unparalleled exploration on
            the stunning island of Madeira. With a deep passion for nature and a
            commitment to providing exceptional experiences, we specialize in
            offering guided levada tours, exhilarating hiking expeditions, and
            convenient van rentals for unforgettable camping escapades.
          </p>
          <p>
            At Outlander, we believe in uncovering the hidden gems of Madeira's
            breathtaking landscape. Our seasoned guides are not only experts in
            navigating the intricate levada networks, but they're also eager to
            share their extensive knowledge about the island's flora, fauna, and
            cultural heritage. Whether you're a novice hiker or an experienced
            adventurer, our diverse range of tours caters to all levels of
            expertise.
          </p>
        </div>
        <div>
          <p>
            Our mission goes beyond mere travel – it's about crafting lasting
            memories. Imagine the rush of discovery as you traverse lush
            forests, cross charming footbridges over cascading streams, and take
            in panoramic vistas from mountain summits. With a strong commitment
            to sustainable and responsible tourism, we ensure that your
            exploration leaves a positive impact on the environment and local
            communities.
          </p>
          <p>
            We understand that every traveler seeks a unique experience. That's
            why we offer not only guided tours but also the opportunity to
            create your adventure with our van rental service. Pack your camping
            gear and hit the road at your own pace, choosing your own routes and
            camping spots while knowing that our team is just a call away for
            any assistance you may need.
          </p>
        </div>
      </div>

      <img className="main-images" src={Image2} alt="" />

      <Faq />

      <CallToAction />
    </Container>
  );
}

export default About;

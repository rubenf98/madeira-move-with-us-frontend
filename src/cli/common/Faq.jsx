import { Collapse } from "antd";
import React from "react";
import styled from "styled-components";
import { SectionContainer } from "../../styles";

const Container = styled(SectionContainer)`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 50px;
  flex-wrap: wrap;

  .title {
    width: 40%;
  }

  h3,
  p {
    margin: 0px;
    text-align: left;
  }

  .ant-collapse {
    flex: 1;
    padding-right: 50px;
    box-sizing: border-box;
  }
`;

const text = [
  {
    key: "1",
    label: "What services do you offer?",
    children: (
      <p>
        We provide guided tours, private trips, custom packages, outdoor
        activities like hiking, and cultural experiences.
      </p>
    ),
  },
  {
    key: "2",
    label: "Are the tours suitable for all ages?",
    children: (
      <p>
        Yes, we offer options for all age groups and fitness levels. Check the
        description of each tour for more details.{" "}
      </p>
    ),
  },
  {
    key: "3",
    label: "Do I need prior experience to join hikes or activities?",
    children: (
      <p>
        Not necessarily. We have activities for beginners and more experienced
        participants. Our guides will adjust the pace as needed.
      </p>
    ),
  },
  {
    key: "4",
    label: "How do I book a tour?",
    children: (
      <p>
        You can book directly through our website, contact us via phone or
        email, or visit our office.
      </p>
    ),
  },
  {
    key: "5",
    label: "What is your cancellation policy?",
    children: (
      <p>
        We offer a full refund for cancellations made up to 48 hours before the
        tour. Check our terms for additional details.
      </p>
    ),
  },
  {
    key: "6",
    label: "Do the tours include transportation?",
    children: (
      <p>
        Yes, most of our tours include transportation from a meeting point or
        your accommodation, depending on the package.
      </p>
    ),
  },
  {
    key: "7",
    label: "What is included in the tour price?",
    children: (
      <p>
        Prices usually include the tour guide, transportation, attraction
        entrance fees, and in some cases, meals or snacks. Refer to the specific
        tour description for details.
      </p>
    ),
  },
  {
    key: "8",
    label: "Do you offer private or customized tours?",
    children: (
      <p>
        Yes, we can organize private tours or tailor itineraries to suit your
        preferences.
      </p>
    ),
  },
  {
    key: "9",
    label: "What is the best time of year to visit ?",
    children: (
      <p>
        It depends on the activity you’re interested in. Our guides can help you
        plan your visit during the ideal season.
      </p>
    ),
  },
  {
    key: "10",
    label: "Can I bring children or pets on the tours?",
    children: (
      <p>
        It depends on the tour. Please check specific restrictions before
        booking.
      </p>
    ),
  },
];

function Faq() {
  return (
    <Container>
      <div className="title">
        <h3>Frequently asked questions</h3>
        <p>
          Here are the questions most people ask regarding Madeira Move With Us.
          If none of these interest you, contact us for additional information.
        </p>
      </div>

      <Collapse accordion defaultActiveKey={["1"]} ghost items={text} />
    </Container>
  );
}

export default Faq;

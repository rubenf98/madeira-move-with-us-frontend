import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 80px 20px;
  box-sizing: border-box;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;

  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;

  color: #333;

  h3 {
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 25px;
  }

  a {
    color: #555;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s ease;

    &:hover {
      color: #4d925e;
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .logo {
    width: 130px;
    height: auto;
    margin-bottom: 25px;
  }

  .slogan {
    font-size: clamp(18px, 2vw, 26px);
    font-weight: 700;
    line-height: 1.1;
    margin: 0 0 30px;

    span {
      opacity: 0.6;
    }
  }

  .socials {
    display: flex;
    gap: 15px;

    a {
      width: 42px;
      height: 42px;
      border: 1px solid #333;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: all 0.3s ease;

      &:hover {
        background-color: #4d925e;
        border-color: #4d925e;

        img {
          filter: brightness(0) invert(1);
        }
      }

      img {
        width: 20px;
        height: 20px;
        object-fit: contain;
      }
    }
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  h3 {
    margin-bottom: 5px;
  }

  a {
    line-height: 1.5;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <Content>
        <Brand>
          <img
            className="logo"
            src="/logo_white_background.svg"
            alt="Company logo"
          />

          <p className="slogan">
            We move people{" "}
            <span>
              Create <br />
              experiences{" "}
            </span>
            Deliver comfort
          </p>

          <div className="socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src="/icons/instagram.svg" alt="" />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src="/icons/facebook.svg" alt="" />
            </a>
          </div>
        </Brand>

        <FooterColumn>
          <h3>Quick Links</h3>

          <Link to="/about">About us</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/cookies">Cookies</Link>
        </FooterColumn>

        <FooterColumn>
          <h3>Services</h3>

          <Link to="/transfers">Transfers</Link>
          <Link to="/tours">Tours & Itineraries</Link>
          <Link to="/experiences">Nature Experiences</Link>
        </FooterColumn>

        <FooterColumn>
          <h3>Contacts</h3>

          <a href="mailto:geral@myemail.com">geral@myemail.com</a>

          <a href="tel:+351123123123">+351 123 123 123</a>
        </FooterColumn>
      </Content>
    </FooterContainer>
  );
}

export default Footer;

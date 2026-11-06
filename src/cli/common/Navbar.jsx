import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { PrimaryButton } from "../../styles";
// import logo from "../assets/logo.svg";

const Container = styled.section`
  width: 100%;
  background-image: ${({ $isHome }) =>
    $isHome ? "none" : "url('/navbar_background.svg')"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .content {
    max-width: 1440px;
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    margin: auto;
    width: 100%;
    box-sizing: border-box;
  }

  .breadcrumbs {
    justify-content: flex-start;
    gap: 15px;
    padding: 0px;
    height: auto;

    a {
      color: white;
      font-size: clamp(14px, 2vw, 18px);
      text-decoration: none;
      opacity: 0.5;

      &:hover {
        transition: opacity 0.3s ease;
        opacity: 1;
      }
    }

    .active {
      opacity: 1;
    }
  }

  p {
    color: white;
    font-size: clamp(14px, 2vw, 18px);
  }

  .logo-link {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .logo-link img {
    display: block;
    height: 100%;
    object-fit: contain;
  }

  .links {
    display: flex;
    gap: 40px;

    a {
      color: white;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
`;

const BREADCRUMB_DICTIONARY = {
  "/about": {
    labels: ["About Us"],
    to: ["/about"],
  },
  "/services/tours": {
    labels: ["Services", "Tours"],
    to: ["/#services", "/services/tours"],
  },
  "/services/transfers": {
    labels: ["Services", "Transfers"],
    to: ["/#services", "/services/transfers"],
  },
  "/contact": {
    labels: ["Contact"],
    to: ["/contact"],
  },
};

function Navbar() {
  const location = useLocation();
  const breadcrumbs = BREADCRUMB_DICTIONARY[location.pathname] || {
    labels: [],
    to: [],
  };

  const isHome = location.pathname === "/";
  return (
    <Container $isHome={isHome}>
      <div className="content">
        <Link to="/" className="logo-link">
          <img src="/logo.svg" alt="logo" />
        </Link>

        <div className="links">
          <Link to="/about">About Us</Link>
          <Link to="/#services">Services</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
        <PrimaryButton>
          <span>Book now</span>
        </PrimaryButton>
      </div>
      {!isHome && (
        <div className="content breadcrumbs">
          <Link to="/">Home</Link>

          {breadcrumbs.labels.map((breadcrumb, index) => (
            <>
              <p>/</p>
              {index == breadcrumbs.labels.length - 1 ? (
                <p className="active">{breadcrumb}</p>
              ) : (
                <Link to={breadcrumbs.to[index]}>{breadcrumb}</Link>
              )}
            </>
          ))}
        </div>
      )}
    </Container>
  );
}

export default Navbar;

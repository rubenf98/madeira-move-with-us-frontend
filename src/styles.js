import styled from "styled-components";

export const colors = {
  primary: "#4B8851",
  lightPrimary: "#E5F6E8"
}

export const SectionContainer = styled.section`
  width: 100%;
  margin: 150px auto;
  max-width: 1440px;

  @media (max-width: "1440px") {
      padding: 0px 20px;
      box-sizing: border-box;
  }

  h2 {
    font-size: clamp(28px, 4vw, 70px);
    margin: 0px 0px 20px 0px;
    line-height: 110%;
  }
`;

export const WhiteButton = styled.button`
  border-radius: 12px;
  background-color: white;
  color: ${colors.primary};
  padding: 5px;
  box-sizing: border-box;
  font-weight: bold;
  border: 0px;
  box-shadow: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: clamp(16px, 3vw, 18px);
  
  img {
    height: 100%;
  }

  span {
    padding: 6px 16px;
    box-sizing: border-box;
  }
`;

export const PrimaryButton = styled.button`
  border-radius: 12px;
  color: white;
  background-color: ${colors.primary};
  padding: 5px;
  box-sizing: border-box;
  font-weight: bold;
  border: 0px;
  box-shadow: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: clamp(16px, 3vw, 18px);

  img {
    height: 100%;
  }

  span {
    padding: 6px 16px;
    box-sizing: border-box;
  }
`;
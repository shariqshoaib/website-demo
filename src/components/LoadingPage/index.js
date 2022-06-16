import React from "react";
import styled from "styled-components";
import FONTS from "../../utils/fonts";

const StyledLoadingContainer = styled.div`
  display: flex;
  height: 98vh;
  justify-content: center;
  align-items: center;
`;

const StyledSquare = styled.div`
  width: 3px;
  height: 3px;
  background-color: #fff;
`;

const StyledText = styled.div`
  letter-spacing: .2em;
  text-transform: uppercase;
  max-width: 110px;
  position: relative;
  top: 22px;
  left: 13px;
  font-size: 18px;
  font-family: 'Barlow', Arial, Helvetica, sans-serif;
  font-weight: normal;
`;

const StyledAnimation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 5px;
  height: 14px;
  animation: squares-animation 5s ease-in-out infinite;

  @keyframes squares-animation {
    0%     { height: 14px; transform: rotate(0deg); }
    10%    { height: 80px; transform: rotate(180deg); }
    25%    { height: 80px; transform: rotate(180deg); }
    30%    { height: 14px; transform: rotate(180deg); }
    40%    { height: 14px; transform: rotate(180deg); }
    50%    { height: 14px; transform: rotate(180deg); }
    60%    { height: 14px; transform: rotate(180deg); }
    70%    { height: 14px; transform: rotate(180deg); }
    80%    { height: 14px; transform: rotate(180deg); }
    90%    { height: 14px; transform: rotate(180deg); }
    100%    { height: 14px; transform: rotate(180deg); }
  }
`;

const LoadingPage = () => {

  return (
    <StyledLoadingContainer>
      <StyledAnimation>
        <StyledSquare />
        <StyledSquare />
      </StyledAnimation>
      {/* <StyledText>
        Artisans D'idées
      </StyledText> */}
    </StyledLoadingContainer>
  )
}

export default LoadingPage;
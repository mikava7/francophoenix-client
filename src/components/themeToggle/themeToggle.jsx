import React from "react";
import styled, { keyframes, css } from "styled-components";

import moonIcon from "../../assets/moon-50.png";
import sunIcon from "../../assets/sun-50.png";

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <ThemeToggleContainer onClick={toggleTheme} style={{ marginRight: "2rem" }}>
      <ToggleImageContainer theme={theme}>
        <img src={theme === "light" ? moonIcon : sunIcon} alt="Toggle Icon" />
      </ToggleImageContainer>
    </ThemeToggleContainer>
  );
};

export default ThemeToggle;
export const slideRight = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const slideLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;
export const ThemeToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;
export const ToggleImageContainer = styled.div`
  display: flex;
  width: 3.2rem;
  background-color: ${(props) =>
    props.theme === "light" ? "#E0E0E0" : "#e4b315"};

  border-radius: 100px;
  cursor: pointer;
  &:not(input) {
    user-select: none;
  }
  img {
    width: 2rem;
    animation: ${(props) =>
      props.theme === "light"
        ? css`
            ${slideRight} 0.8s forwards
          `
        : css`
            ${slideLeft} 0.8s forwards
          `};
  }
`;

import React from "react";
import styled from "styled-components";

const ToggleTranslation = ({ isActive, onClick }) => {
  return (
    <ToggleContainer>
      <ToggleText>
        {isActive ? "Hide All Translations" : "Show All Translations"}
      </ToggleText>
      <ToggleButton isActive={isActive} onClick={onClick}></ToggleButton>
    </ToggleContainer>
  );
};

export default ToggleTranslation;

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #f8ad22;
  border: none;
  height: 2.4rem;
  border-radius: 20px;
  cursor: pointer;

  width: 4.6rem;
  position: relative;
  transition: background-color 0.3s;

  &::before {
    content: "";
    position: absolute;
    width: 2rem;
    height: 2rem;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.3s;
    transform: ${({ isActive }) =>
      isActive ? "translateX(0)" : "translateX(100%)"};
  }
`;

const ToggleText = styled.span`
  font-size: 1.2rem;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

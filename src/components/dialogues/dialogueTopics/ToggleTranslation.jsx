import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
const ToggleTranslation = ({ isActive, onClick }) => {
  const { t } = useTranslation();

  return (
    <ToggleContainer>
      <ToggleText>
        {isActive
          ? t("Cacher Toutes les Traductions")
          : t("Afficher toutes les traductions")}
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
  width: 4.6rem;
  height: 2.4rem;
  border-radius: 20px;
  cursor: pointer;
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
  @media (max-width: 768px) {
    width: 4rem;
    height: 2rem;
    &:before {
      width: 1.7rem;
      height: 1.7rem;
    }
  }
  @media (max-width: 576px) {
    width: 3.6rem;
    height: 1.6rem;
    &:before {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
`;

const ToggleText = styled.span`
  font-size: 1.2rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

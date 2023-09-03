import React from "react";
import styled, { keyframes, css } from "styled-components";
import { slideLeft, slideRight } from "../../Styles/frames";
// Import the flag emojis as React components (you can replace them with the actual flag emojis)
import FrenchFlag from "../../../public/icons/french-flag-48.png";
import GeorgianFlag from "../../../public/icons/georgia-48.png";
import EnglishFlag from "../../../public/icons/usa-flag-48.png";
import { useTranslation } from "react-i18next";

const LanguageToggle = ({
  inputLanguage,
  toggleInputLanguage,
  isGeorgian,
  secondLanguage,
}) => {
  const { t } = useTranslation();
  return (
    <LanguageToggleContainer>
      <French inputLanguage={inputLanguage} onClick={toggleInputLanguage}>
        {t("Français")}
      </French>
      <ToggleContainer onClick={toggleInputLanguage}>
        <ToggleIcon inputLanguage={inputLanguage}>
          <img
            src={
              inputLanguage === "french"
                ? FrenchFlag
                : isGeorgian
                ? GeorgianFlag
                : EnglishFlag
            }
            alt="FrenchFlag"
          />
        </ToggleIcon>
      </ToggleContainer>
      <SecondLanguage
        onClick={toggleInputLanguage}
        inputLanguage={inputLanguage}
      >
        {isGeorgian ? "ქართული" : "English"}
      </SecondLanguage>
    </LanguageToggleContainer>
  );
};

export default LanguageToggle;
const LanguageToggleContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  align-items: center;
`;
const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* width: 50%; */
  @media (max-width: 576px) {
    /* width: 2rem; */
  }
`;

const ToggleIcon = styled.div`
  display: flex;
  width: 4rem;
  height: 2.2rem;
  padding: 0.4rem;
  padding-left: 0.6rem;

  margin: auto 1rem;
  background-color: ${(props) => (props.isGeorgian ? "#E0E0E0" : "#007bff")};
  border-radius: 100px;
  cursor: pointer;
  &:not(input) {
    user-select: none;
  }
  img {
    width: 2rem;
    @media (min-width: 576px) and (max-width: 767px) {
      width: 2rem;
    }
    @media (max-width: 576px) {
      width: 2rem;
    }
    animation: ${(props) =>
      props.inputLanguage === "french"
        ? css`
            ${slideLeft} 0.8s forwards
          `
        : css`
            ${slideRight} 0.8s forwards
          `};
  }
`;
const French = styled.div`
  margin: 0.5rem auto;
  outline: 2px solid ${(props) => props.theme.primarText};
  background-color: ${(props) =>
    props.inputLanguage === "french" ? "#007bff" : props.theme.primaryText};
  color: ${(props) =>
    props.inputLanguage === "french"
      ? props.theme.primaryText
      : props.theme.primaryBackground};

  padding: 0.5rem 2rem;
  border-radius: 12px;
  @media (max-width: 576px) {
    font-size: 1rem;
    width: 4rem;
  }
`;
const SecondLanguage = styled(French)`
  background-color: ${(props) =>
    props.inputLanguage === "french" ? props.theme.primaryText : "#007bff"};
  color: ${(props) =>
    props.inputLanguage === "french"
      ? props.theme.primaryBackground
      : props.theme.primaryText};
`;

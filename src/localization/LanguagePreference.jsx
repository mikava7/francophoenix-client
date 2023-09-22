import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import GeorgianFlag from "../assets/icons/georgia-48.png";
import EnglishFlag from "../assets/icons/usa-flag-48.png";
const LanguagePreference = ({ handleLanguagePopupClose }) => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("languageSelected") || ""
  );

  const handleLanguageSelection = (language) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
  };

  if (selectedLanguage) {
    // If a language is selected, you can render something else or nothing here.
    return null;
  }

  return (
    <LanguagePreferenceContainer>
      <h2>{t("Choisissez votre langue")}</h2>

      <button onClick={() => handleLanguagePopupClose("en")}>
        {t("English")}
        <img src={EnglishFlag} alt="EnglishFlag" />
      </button>
      <button onClick={() => handleLanguagePopupClose("ka")}>
        {t("ქართული")}
        <img src={GeorgianFlag} alt="GeorgianFlag" />
      </button>
    </LanguagePreferenceContainer>
  );
};

export default LanguagePreference;
const LanguagePreferenceContainer = styled.div`
  min-width: 300px;
  max-width: 500px;
  height: 20rem;
  background: ${(props) => props.theme.highlight4};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  outline: 3px solid ${(props) => props.theme.primaryBackground};
  z-index: 9999; /* Ensure it's on top */
  button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    margin-bottom: 1rem;
    img {
      /* margin-right: 3rem;
      margin-left: auto; */
    }
  }
`;

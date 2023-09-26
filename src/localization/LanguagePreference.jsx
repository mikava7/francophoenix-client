import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import TargetLanguageSelection from "./TargetLanguageSelection";
import { supportedLanguages } from "./supportedLanguages";
const LanguagePreference = ({ handleLanguagePopupClose }) => {
  const { t, i18n } = useTranslation();
  const [selectedNativeLanguage, setSelectedNativeLanguage] = useState(
    localStorage.getItem("nativeLanguageSelected") || ""
  );

  const handleNativeLanguageSelection = (language) => {
    i18n.changeLanguage(language);
    setSelectedNativeLanguage(language);
  };

  if (selectedNativeLanguage) {
    // If a native language is selected, proceed to select the target language.
    return (
      <TargetLanguageSelection
        selectedNativeLanguage={selectedNativeLanguage}
        onTargetLanguageSelected={handleLanguagePopupClose}
      />
    );
  }

  return (
    <LanguagePreferenceContainer>
      <h3>I speak</h3>

      {supportedLanguages.map((language) => (
        <button
          key={language.code}
          onClick={() => handleNativeLanguageSelection(language.code)}
        >
          {t(language.name)}
          <img src={language.icon} alt={`${language.code}Flag`} />
        </button>
      ))}
    </LanguagePreferenceContainer>
  );
};
export default LanguagePreference;
export const LanguagePreferenceContainer = styled.div`
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

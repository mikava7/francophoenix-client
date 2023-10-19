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
        t={t}
      />
    );
  }

  return (
    <LanguagePreferenceContainer>
      <TitleWrapper>
        <Title>{t("I speak")}</Title>
        <Title>{t("ვლაპარაკობ")}</Title>
      </TitleWrapper>

      <LanguageList>
        {supportedLanguages.map((language) => (
          <LanguageButton
            key={language.code}
            onClick={() => handleNativeLanguageSelection(language.code)}
          >
            <LanguageName>{t(language.name)}</LanguageName>
            <LanguageFlag src={language.icon} alt={`${language.code}Flag`} />
          </LanguageButton>
        ))}
      </LanguageList>
    </LanguagePreferenceContainer>
  );
};

export default LanguagePreference;

export const LanguagePreferenceContainer = styled.div`
  min-width: 300px;
  max-width: 500px;
  height: 20rem;
  background: ${(props) => props.theme.highlight4};
  color: ${(props) => props.theme.primaryText};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  outline: 3px solid ${(props) => props.theme.primaryBackground};
  z-index: 9999;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
`;

export const LanguageList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.highlight3};
  color: ${(props) => props.theme.primaryText};

  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.highlight2};
  }
`;

const LanguageName = styled.span`
  font-size: 1.2rem;
`;

const LanguageFlag = styled.img`
  width: 24px;
  height: 24px;
`;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { supportedLanguages } from "./supportedLanguages";

const Localization = () => {
  const { t, i18n } = useTranslation();
  const [showSpeakLanguages, setShowSpeakLanguages] = useState(false);
  const [showLearnLanguages, setShowLearnLanguages] = useState(false);

  const nativeLanguage = localStorage.getItem("nativeLanguageSelected");
  const targetLanguage = localStorage.getItem("targetLanguageSelected");

  const handleLanguageChange = (language, type) => {
    i18n.changeLanguage(language);
    localStorage.setItem(`${type}LanguageSelected`, language);
    setShowSpeakLanguages(false);
    setShowLearnLanguages(false);
  };

  const availableNativeLanguages = supportedLanguages.filter(
    (language) =>
      language.code !== nativeLanguage && language.code !== targetLanguage
  );

  const availableTargetLanguages = supportedLanguages.filter(
    (language) =>
      language.code !== nativeLanguage && language.code !== targetLanguage
  );

  // Find the selected native and target languages
  const selectedNativeLanguage = supportedLanguages.find(
    (lang) => lang.code === nativeLanguage
  );

  const selectedTargetLanguage = supportedLanguages.find(
    (lang) => lang.code === targetLanguage
  );

  return (
    <LocalizationContainer>
      <LanguageDropdown>
        <Title onClick={() => setShowSpeakLanguages(!showSpeakLanguages)}>
          <NativeTitle>{t("Je parle")}</NativeTitle>
          <SelectedLanguage>
            <img
              src={selectedNativeLanguage?.icon}
              alt={selectedNativeLanguage?.code}
            />
            {selectedNativeLanguage?.name}
          </SelectedLanguage>
        </Title>
        {showSpeakLanguages && (
          <LanguageList>
            {availableNativeLanguages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code, "native")}
              >
                <img src={language.icon} alt={language.code} />
                {language.name}
              </button>
            ))}
          </LanguageList>
        )}
      </LanguageDropdown>
      <LanguageDropdown>
        <Title onClick={() => setShowLearnLanguages(!showLearnLanguages)}>
          <SelectedLanguage>
            <img
              src={selectedTargetLanguage?.icon}
              alt={selectedTargetLanguage?.code}
            />
            {selectedTargetLanguage?.name}
          </SelectedLanguage>
          <TargetTitle>{t("J'apprends")}</TargetTitle>
        </Title>
        {showLearnLanguages && (
          <LanguageList>
            {availableTargetLanguages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code, "target")}
              >
                <img src={language.icon} alt={language.code} />
                {language.name}
              </button>
            ))}
          </LanguageList>
        )}
      </LanguageDropdown>
    </LocalizationContainer>
  );
};

const LocalizationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 480px;
  background: ${(props) => props.theme.secondaryBackground};
  /* outline: 2px solid ${(props) => props.theme.highlight2}; */
  box-shadow: ${(props) => props.theme.localizationBoxShadow};
  @media (max-width: 855px) {
    width: 90%;
    flex-direction: column;
    margin: 0 auto;
    padding-left: 1rem;
  }
`;

const LanguageDropdown = styled.div`
  cursor: pointer;
  padding: 0.2rem;
  position: relative;
`;

const Title = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 230px;
`;

const LanguageList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: ${(props) => props.theme.primaryBackground};

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 4px;
  button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.4rem 0.8rem;
    color: ${(props) => props.theme.primaryText};

    img {
      width: 2rem;
      margin-right: 0.5rem;
    }
    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const SelectedLanguage = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.4rem;

  font-weight: bold;
  font-size: 1rem;
  outline: 1px solid ${(props) => props.theme.highlight4};
  color: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.secondaryText};

  img {
    width: 1.8rem;
    margin-right: 0.2rem;
  }
`;
const NativeTitle = styled.h5`
  margin-right: 0.4rem;
  &::after {
    content: " -";
  }
`;
const TargetTitle = styled.h5`
  margin-left: 0.4rem;
  &::before {
    content: " - ";
  }
`;
export default Localization;

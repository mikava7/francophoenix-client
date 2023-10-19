import { useState, useEffect } from "react";
import styled from "styled-components";

import { supportedLanguages } from "./supportedLanguages";
import {
  LanguagePreferenceContainer,
  LanguageButton,
  Title,
} from "./LanguagePreference";
const TargetLanguageSelection = ({
  selectedNativeLanguage,
  onTargetLanguageSelected,
  t,
}) => {
  const [selectedTargetLanguage, setSelectedTargetLanguage] = useState(
    localStorage.getItem("targetLanguageSelected") || ""
  );
  // console.log("selectedTargetLanguage", selectedTargetLanguage);
  // console.log("onTargetLanguageSelected", onTargetLanguageSelected);

  const handleTargetLanguageSelection = (language) => {
    setSelectedTargetLanguage(language);
    onTargetLanguageSelected(selectedNativeLanguage, language);

    // Save the selected target language to localStorage
    localStorage.setItem("targetLanguageSelected", language);
  };

  // Use useEffect to update localStorage whenever selectedTargetLanguage changes
  useEffect(() => {
    localStorage.setItem("targetLanguageSelected", selectedTargetLanguage);
  }, [selectedTargetLanguage]);

  return (
    <LanguagePreferenceContainer>
      <Title>{t("Choisissez une langue à apprendre")} </Title>

      {supportedLanguages
        .filter((language) => language.code !== selectedNativeLanguage)
        .map((language) => (
          <LanguageButton
            key={language.code}
            onClick={() => handleTargetLanguageSelection(language.code)}
          >
            {language.name}
            <LanguageFlag src={language.icon} alt={`${language.code}Flag`} />
          </LanguageButton>
        ))}
    </LanguagePreferenceContainer>
  );
};

export default TargetLanguageSelection;
const LanguageFlag = styled.img`
  width: 24px;
  height: 24px;
`;

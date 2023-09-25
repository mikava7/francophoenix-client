import { useState, useEffect } from "react";
import { supportedLanguages } from "./supportedLanguages";
import { LanguagePreferenceContainer } from "./LanguagePreference";
const TargetLanguageSelection = ({
  selectedNativeLanguage,
  onTargetLanguageSelected,
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
      <h2>Choose the language you want to learn</h2>
      {supportedLanguages
        .filter((language) => language.code !== selectedNativeLanguage)
        .map((language) => (
          <button
            key={language.code}
            onClick={() => handleTargetLanguageSelection(language.code)}
          >
            {language.name}
            <img src={language.icon} alt={`${language.code}Flag`} />
          </button>
        ))}
    </LanguagePreferenceContainer>
  );
};

export default TargetLanguageSelection;

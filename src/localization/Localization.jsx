import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { supportedLanguages } from "./supportedLanguages";

const Localization = () => {
  const { i18n } = useTranslation();

  const nativeLanguage = localStorage.getItem("nativeLanguageSelected");
  const targetLanguage = localStorage.getItem("targetLanguageSelected");
  console.log("nativeLanguage", nativeLanguage);
  console.log("targetLanguage", targetLanguage);

  const handleLanguageChange = (language, type, e) => {
    e.stopPropagation();

    i18n.changeLanguage(language);
    localStorage.setItem(`${type}LanguageSelected`, language);
  };
  // &&
  // Filter the list of supported languages to exclude the selected languages
  const availableNativeLanguages = supportedLanguages.filter(
    (language) => language.code !== nativeLanguage
  );
  console.log("NativeLanguages", availableNativeLanguages);
  const availableTargetLanguages = supportedLanguages.filter(
    (language) => language.code !== targetLanguage
  );
  console.log("TargetLanguages", availableTargetLanguages);
  return (
    <LanguageDropdowns>
      <LanguageDropdown>
        <h2>main language</h2>

        <select
          onChange={(e) => handleLanguageChange(e.target.value, "native", e)}
          value={nativeLanguage}
        >
          {availableNativeLanguages.map((language) => (
            <option key={language.code} value={language.code}>
              {language.name}
            </option>
          ))}
        </select>
      </LanguageDropdown>
      <LanguageDropdown>
        <h2>Target language</h2>
        <select
          onChange={(e) => handleLanguageChange(e.target.value, "target", e)}
          value={targetLanguage}
        >
          {availableTargetLanguages.map((language) => (
            <option key={language.code} value={language.code}>
              {language.name}
            </option>
          ))}
        </select>
      </LanguageDropdown>
    </LanguageDropdowns>
  );
};

const LanguageDropdowns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

const LanguageDropdown = styled.div`
  cursor: pointer;
  padding: 1rem;
  select {
    font-size: 1.3rem;
    padding: 1rem;
    border: none;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
    img {
      width: 2.2rem;
    }
  }
`;

export default Localization;

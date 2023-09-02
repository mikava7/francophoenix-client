import { useTranslation } from "react-i18next";
import styled from "styled-components";
const Localization = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };
  const handleDefaultLanguage = () => {
    const defaultLanguage = "fr"; // Replace with your default language code
    i18n.changeLanguage(defaultLanguage);
  };
  const isGeorgian = i18n.language === "ka";
  return (
    <LenguageButtons>
      {" "}
      <button onClick={handleDefaultLanguage}>🇫🇷</button>
      {isGeorgian ? (
        <button onClick={() => handleLanguageChange("en")}>🇺🇸</button>
      ) : (
        <button onClick={() => handleLanguageChange("ka")}>🇬🇪</button>
      )}
    </LenguageButtons>
  );
};
const LenguageButtons = styled.div`
  display: flex;

  /* flex-direction: column; */

  button {
    font-size: 1.3rem;
    border: none;
    background: none;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
export default Localization;

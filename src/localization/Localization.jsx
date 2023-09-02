import { useTranslation } from "react-i18next";
import styled from "styled-components";
// import FrenchFlag from '../../public'
import FrenchFlag from "../../public/icons/french-flag-48.png";

import GeorgianFlag from "../../public/icons/georgia-48.png";
import EnglishFlag from "../../public/icons/usa-flag-48.png";
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
      <button onClick={handleDefaultLanguage}>
        {" "}
        <img src={FrenchFlag} alt="FrenchFlag" />{" "}
      </button>
      {isGeorgian ? (
        <button onClick={() => handleLanguageChange("en")}>
          {" "}
          <img src={EnglishFlag} alt="EnglishFlag" />{" "}
        </button>
      ) : (
        <button onClick={() => handleLanguageChange("ka")}>
          <img src={GeorgianFlag} alt="GeorgianFlag" />
        </button>
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
    img {
      width: 2.2rem;
    }
  }
`;
export default Localization;

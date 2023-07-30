import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Listen from "../../../Listen";
import Favorite from "../../../Favorite";

const VocabularyPage = ({ vocabulary }) => {
  const { fr, geo, en, definitions } = vocabulary;
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  const [activeIndex, setActiveIndex] = useState(-1);

  // Set initial state for button colors
  const initialFrButtonColors = fr.map(() => "#ffb923");
  const initialSecondLangButtonColors = fr.map(() => "#ffffec");
  const [frButtonColors, setFrButtonColors] = useState(initialFrButtonColors);
  const [secondLangButtonColors, setSecondLangButtonColors] = useState(
    initialSecondLangButtonColors
  );

  const toggleDefinition = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));

    // Toggle the button color for the clicked word
    setFrButtonColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = newColors[index] === "#ffffec" ? "#ffb923" : "#ffffec";
      return newColors;
    });

    setSecondLangButtonColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = newColors[index] === "#ffffec" ? "#ffb923" : "#ffffec";
      return newColors;
    });
  };

  const secondLanguage = isGeorgian ? geo : en;
  const secondLangButtonName = isGeorgian ? "Geo" : "Eng";

  return (
    <VocabularyPageContainer>
      <h2>Vocabulary</h2>
      <div>
        {fr.map((frWord, index) => (
          <WordCard key={index}>
            <FrenchWord>{frWord}</FrenchWord>
            <ButtonContainer>
              <button
                style={{ background: frButtonColors[index] }}
                onClick={() => toggleDefinition(index)}
              >
                Fr
              </button>
              <button
                style={{ background: secondLangButtonColors[index] }}
                onClick={() => toggleDefinition(index)}
              >
                {secondLangButtonName}
              </button>
            </ButtonContainer>
            <SecondLangOrDef>
              {activeIndex === index
                ? secondLanguage[index]
                : definitions[index]}
            </SecondLangOrDef>
            <WordCArdApendix>
              <p>nom masculin</p>
              <Listen />
              <Favorite />
            </WordCArdApendix>
          </WordCard>
        ))}
      </div>
    </VocabularyPageContainer>
  );
};

export default VocabularyPage;

const VocabularyPageContainer = styled.div``;
const WordCard = styled.div`
  background: #fdffa3;
  padding: 1rem;
  margin: 1rem;
  position: relative;
  min-height: 3.5rem;
  border-radius: 12px;
  border-bottom: 3px solid orange;
  border-right: 2px solid orange;
`;
const FrenchWord = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;
const ButtonContainer = styled.div`
  position: absolute;
  top: 10%;
  right: 2%;
  button {
    border: none;
    width: 2.5rem;
    transition: background-color 0.5s ease; /* Added the transition property */
  }
`;
const WordCArdApendix = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  :first-child {
    font-style: italic;
  }
`;
const SecondLangOrDef = styled.div`
  margin-left: 1rem;
  min-height: 3rem;
`;

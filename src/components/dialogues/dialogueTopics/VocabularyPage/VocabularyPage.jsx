import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Listen from "../../../Listen";
import AddToFlashcards from "../../../Utility/AddToFlashcards";
import useListenWord from "../../../../hooks/useListenWord";
import AddToFavorites from "../../../Utility/AddToFavorites";
import ListenImg from "../../../../../public/icons/sound-50.png";
import DefinitionToggle from "./DefinitionToggle";
const VocabularyPage = ({ words }) => {
  const french = words.map((word) => word.french);
  const english = words.map((word) => word.english);
  const georgian = words.map((word) => word.georgian);
  const definition = words.map((word) => word.definition);
  const { handleListen, isActiveStates } = useListenWord();
  // console.log("definition in VocabularyPage", definition);
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";

  const secondLanguage = isGeorgian ? georgian : english;
  const secondLangButtonName = isGeorgian ? "Geo" : "Eng";

  return (
    <VocabularyPageContainer>
      <VocabularyTitle>Vocabulary</VocabularyTitle>
      <div>
        {french.map((frWord, index) => (
          <WordCard key={index}>
            <FrenchWord onClick={handleListen(frWord)}>{frWord}</FrenchWord>
            <DefinitionToggle
              definition={definition}
              secondLanguage={secondLanguage}
              secondLangButtonName={secondLangButtonName}
              french={french}
              index={index}
              isMultipleDefinitions={true}
            />
            <WordCArdApendix>
              <p>nom masculin</p>
              <IconsContainer>
                <ListenIconContainer onClick={handleListen(frWord)}>
                  <Listen />
                </ListenIconContainer>
                <AddToFavorites
                  word={frWord}
                  definition={definition[index]}
                  secondLanguage={secondLanguage[index]}
                  secondLanguageExamples={"No examples"}
                />
                <AddToFlashcards
                  word={frWord}
                  frenchExamples={definition[index]}
                  secondLanguage={secondLanguage[index]}
                  secondLanguageExamples={"No examples"}
                />
              </IconsContainer>
            </WordCArdApendix>
          </WordCard>
        ))}
      </div>
    </VocabularyPageContainer>
  );
};

export default VocabularyPage;

const VocabularyPageContainer = styled.div`
  margin-top: 5rem;
  h2 {
    margin-bottom: 3rem;
  }
`;
const VocabularyTitle = styled.h1`
  &:before {
    content: "💥 ";
  }
`;
const WordCard = styled.div`
  border-bottom: 5px solid ${(props) => props.theme.primaryText};
  border-right: 5px solid ${(props) => props.theme.primaryText};
  background: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.primaryText};
  padding: 1rem;
  margin: 1rem 0.5rem;
  position: relative;
  min-height: 3.5rem;
  border-radius: 0 0 0 12px;
  max-width: 100%;
`;
const FrenchWord = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
`;
// const ButtonContainer = styled.div`
//   position: absolute;
//   top: 10%;
//   right: 2%;
//   font-size: 1.4rem;

//   button {
//     border: none;
//     font-size: 1.2rem;
//     width: 3rem;
//     height: 2rem;
//     transition: background-color 0.5s ease;
//   }
// `;
const WordCArdApendix = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  :first-child {
    font-style: italic;
  }
`;
// const SecondLangOrDef = styled.div`
//   margin-left: 1rem;
//   min-height: 3rem;
//   padding: 0.5rem;
//   font-size: 1.2rem;
//   font-style: italic;
// `;
const IconsContainer = styled.div`
  display: flex;

  gap: 1rem;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 1rem;
  margin-left: auto;
`;
const ListenIconContainer = styled.div`
  display: flex;
`;

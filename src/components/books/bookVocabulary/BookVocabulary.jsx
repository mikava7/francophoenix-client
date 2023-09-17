import React from "react";
import styled from "styled-components";
import Listen from "../../Listen";
import useListenWord from "../../../hooks/useListenWord";
import AddToFlashcards from "../../Utility/AddToFlashcards";

const VocabularyContainer = styled.div`
  overflow-x: hidden; /* Hide horizontal overflow */
`;

const BookVocabulary = ({ vocabularyTranslations }) => {
  const { handleListen, isActiveStates } = useListenWord();

  return (
    <VocabularyContainer>
      {Object.entries(vocabularyTranslations).map(
        ([frenchWord, englishTranslation], index) => (
          <Word key={index}>
            <TopPart>
              <Index>{index + 1}</Index>

              <French>{frenchWord.replace(/\([^)]*\)/, "").trim()}</French>
              <Translation>{englishTranslation}</Translation>
            </TopPart>
            <FlashcardBox>
              <ListenBox onClick={handleListen(frenchWord)}>
                <Listen isActive={isActiveStates[index]} />
              </ListenBox>
              <AddToFlashcards
                word={frenchWord}
                definition={""}
                secondLanguage={englishTranslation}
              />
            </FlashcardBox>
          </Word>
        )
      )}
    </VocabularyContainer>
  );
};

export default BookVocabulary;

const Word = styled.span`
  background-color: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.text};
  display: flex;
  /* align-items: center; */
  border-radius: 12px;
  font-style: oblique;
  box-sizing: border-box;
  padding: 0.4rem 0;
  padding-left: 0.1rem;
  margin-bottom: 0.4rem;
  border-bottom: 2px solid ${(props) => props.theme.highlight3};
  margin: 0.4rem 0;
  @media (max-width: 415px) {
    flex-direction: column;
  }
`;
const TopPart = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  /* justify-content: space-around; */
`;
const French = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin-right: 0.4rem;
  /* outline: 1px solid red; */
  display: flex;
  align-items: center;
  /* width: 35%; */
  &::after {
    content: " :";
  }
`;

const Translation = styled.span`
  font-size: 0.9rem;
  /* height: 2rem; */
  font-weight: 400;
  /* overflow-x: scroll; */
  color: ${(props) => props.theme.secondaryText};
  overflow-x: scroll;

  display: flex;
  &::after {
    content: "";
  }
`;

const Index = styled.span`
  color: ${(props) => props.theme.secondartText};
  font-size: 1rem;
  /* margin-right: 0.6rem; */
  margin-left: 0.4rem;
  width: 1.6rem;
  &::after {
    content: " .";
  }
`;

const ListenBox = styled.span``;

const FlashcardBox = styled.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: row;
`;

import React from "react";
import styled from "styled-components";
import Listen from "../../Listen";
import useListenWord from "../../../hooks/useListenWord";
import AddToFlashcards from "../../Utility/AddToFlashcards";
const BookVocabulary = ({ vocabularyTranslations }) => {
  const { handleListen, isActiveStates } = useListenWord();

  return (
    <CardContainer>
      {Object.entries(vocabularyTranslations).map(
        ([frenchWord, englishTranslation], index) => (
          <Word>
            <Index>{index + 1}</Index>
            <ListenBox onClick={handleListen(frenchWord)}>
              <Listen isActive={isActiveStates[index]} />
            </ListenBox>
            <French>{frenchWord}</French>
            <Translation>{englishTranslation}</Translation>
            <FlashcardBox>
              <AddToFlashcards
                word={frenchWord}
                definition={""}
                secondLanguage={englishTranslation}
              />
            </FlashcardBox>
          </Word>
        )
      )}
    </CardContainer>
  );
};

export default BookVocabulary;

const CardContainer = styled.div`
  display: flex;
  border-radius: 12px;
  /* justify-content: center; */
  /* margin: 0 auto; */
  border: 1px solid green;
  height: 25rem;
  width: 100%;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondaryBackground};
  overflow-y: scroll;

  &:not(input) {
    user-select: none;
  }
`;

const Word = styled.div`
  background-color: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.text};
  display: flex;

  /* justify-content: space-between; */
  align-items: center; /* Horizontally center within the container */
  border-radius: 12px;
  font-size: 1.3rem;
  /* width: 100%; */
  outline: 1px solid ${(props) => props.theme.primaryText};
  font-style: oblique;
  padding: 1rem;
  margin: 1rem;
`;
const French = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  margin-right: 1rem;
  margin-left: 0.4rem;
  display: flex;

  &::after {
    content: ": ";
  }
`;
const Translation = styled.span`
  font-size: 1.1rem;
  font-weight: 400;

  display: flex;
  font-style: normal;
  &::after {
    content: "";
  }
`;

const Index = styled.span`
  color: ${(props) => props.theme.secondartText};
  font-size: 1.4rem;

  margin-right: 0.6rem;

  &::after {
    content: ".";
  }
`;
const ListenBox = styled.span``;
const FlashcardBox = styled.span`
  margin-left: auto;
`;

import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromFlashcards,
  clearFlashcards,
} from "../../redux/slices/fleshCards/fleshCardSlice";

import styled from "styled-components";
import FlashcardIcon from "../../../public/icons/flash-card.png";
import NoWordsMessage from "../Utility/NoWordsMessage";
import useListenWord from "../../hooks/useListenWord";
import Listen from "../Listen";
import WordJumble from "./trainers/wordTrainer/WordJumble";
import BlurryVocabularyTrainer from "./trainers/BlurryVocabularyTrainer";
import FrQuizTrainer from "./trainers/quizTrainer/FrQuizTrainer";

import { useTranslation } from "react-i18next";

const Flashcards = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const flashcards = useSelector((state) => state.flashcards.flashcards);
  const [selectedFlashcards, setSelectedFlashcards] = useState([]);
  const [showTrainer, setShowTrainer] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null); // Use 'null' for no trainer selected

  const BlurryVocabularyRef = useRef(null);
  const { handleListen, isActiveStates } = useListenWord();

  const handleCheckboxChange = (index) => {
    const selectedFlashcard = flashcards[index];

    if (
      selectedFlashcards.some((item) => item.word === selectedFlashcard.word)
    ) {
      setSelectedFlashcards(
        selectedFlashcards.filter(
          (item) => item.word !== selectedFlashcard.word
        )
      );
    } else {
      setSelectedFlashcards([...selectedFlashcards, selectedFlashcard]);
    }
  };

  const handleRemoveFlashcard = (index) => {
    dispatch(removeFromFlashcards(index));
  };
  const handleClearFlashcards = () => {
    dispatch(clearFlashcards());
  };
  const handleShowTrainer = () => {
    setShowTrainer(true);
    // Calculate the scroll position to account for the fixed navbar
    const navbarHeight = 30 * 16; // 3rem (adjust as needed)
    BlurryVocabularyRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start", // Scroll to the top of the component
      inline: "nearest", // Keep the component at the nearest edge of the viewport
    });
  };

  // useEffect(()=>{
  //   if()
  // },[])
  const selectAllWords = () => {
    setSelectedFlashcards([...flashcards]);
    handleShowTrainer();
  };
  const words = selectedFlashcards.map((flashcard) => flashcard.word);
  return (
    <FavoriteWordsContainer>
      {flashcards.length === 0 ? ( // Check if there are no flashcards
        <NoWordsMessage />
      ) : (
        <FavoriteWordsUl>
          {flashcards.map((card, index) => {
            const {
              word,
              frenchExamples,
              secondLanguage,
              secondLanguageExamples,
            } = card;
            return (
              <FavoriteInstance key={index}>
                <p>
                  <FrenchWord>{word}</FrenchWord>
                  <SeconLangWord>{secondLanguage}</SeconLangWord>
                </p>
                <IconsWrapper onClick={handleListen(word)}>
                  <Listen />
                  <RemoveFromFlashcards
                    onClick={() => handleRemoveFlashcard(index)}
                    src={FlashcardIcon}
                    alt="FlashcardIcon"
                  />
                  <CheckboxWrapper>
                    <Input
                      type="checkbox"
                      id={`flashcard-${index}`}
                      checked={selectedFlashcards.includes(card)} // Use the card object itself for comparison
                      onChange={() => handleCheckboxChange(index)}
                    />
                    <label htmlFor={`flashcard-${index}`} />
                  </CheckboxWrapper>
                </IconsWrapper>
              </FavoriteInstance>
            );
          })}
          <ButtonContainer>
            <TrainAllButton onClick={selectAllWords}>
              {" "}
              {t("Tout sélectionner")}
            </TrainAllButton>

            <ClearAllButton onClick={handleClearFlashcards}>
              {t("Supprimer tout")}
            </ClearAllButton>
          </ButtonContainer>
          {selectedFlashcards.length === 0 && (
            <Message>
              {t(
                "Aucun mot sélectionné. Veuillez sélectionner des mots pour choisir le mode entraîneur."
              )}{" "}
            </Message>
          )}
          <TrainerButtons onClick={handleShowTrainer}>
            <Blurry onClick={() => setSelectedTrainer("blurry")}>
              Blurry Trainer
            </Blurry>
            <Jumble onClick={() => setSelectedTrainer("wordJumble")}>
              Word Jumble Trainer
            </Jumble>
            <Jumble onClick={() => setSelectedTrainer("FrQuizTrainer")}>
              FrQuizTrainer Trainer
            </Jumble>
          </TrainerButtons>

          {/* Render the selected trainer only when flashcards are selected */}
          {selectedTrainer === "blurry" && selectedFlashcards.length > 0 && (
            <Blury ref={BlurryVocabularyRef}>
              <BlurryVocabularyTrainer
                selectedFlashcards={selectedFlashcards}
              />
            </Blury>
          )}
          {selectedTrainer === "wordJumble" &&
            selectedFlashcards.length > 0 && (
              <WordJumble selectedFlashcards={words} />
            )}
          {selectedTrainer === "FrQuizTrainer" &&
            selectedFlashcards.length > 0 && (
              <FrQuizTrainer
                FrenchWord={selectedFlashcards.map((card) => card.word)}
                secondLanguageWord={selectedFlashcards.map(
                  (card) => card.secondLanguage
                )}
              />
            )}
        </FavoriteWordsUl>
      )}
    </FavoriteWordsContainer>
  );
};

export default Flashcards;
const Blury = styled.div`
  height: 100vh;
  overflow: auto;
`;
const FavoriteWordsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 95%;

  padding: 0 0.1rem;
  margin: 0;
  overflow: hidden;
  @media (min-width: 767px) and (max-width: 913px) {
    max-width: 92%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    max-width: 80%;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    max-width: 83%;
  }
  @media (max-width: 392px) {
    max-width: 75%;
  }
  @media (max-width: 300px) {
    max-width: 55%;
  }
`;
const FavoriteWordsUl = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 12px;

  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 1rem;
  max-width: 100%;

  @media (min-width: 577px) and (max-width: 767px) {
    gap: 0.8rem;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    max-width: 100%;
  }
  @media (max-width: 392px) {
    max-width: 100%;
  }
`;

const FavoriteInstance = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 4rem;
  max-width: 95%;
  border-bottom: 3px solid ${(props) => props.theme.primaryText};
  padding: 0.4rem 0.8rem;
  border-radius: 0 0 0 12px;
  margin: 0 0.5rem;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.secondaryBackground};
  @media (min-width: 767px) and (max-width: 913px) {
    width: 85%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
  }
  @media (min-width: 393px) and (max-width: 576px) {
    max-width: 86%;
    min-height: 3rem;
  }
  @media (max-width: 392px) {
    max-width: 90%;
    min-height: 3rem;
  }
`;
const FrenchWord = styled.span`
  font-size: ${(props) => props.theme.large};
  font-style: bold;
  color: ${(props) => props.theme.primaryText};

  &:after {
    content: " - ";
  }
  @media (min-width: 577px) and (max-width: 767px) {
    font-size: ${(props) => props.theme.medium};
  }
  @media (min-width: 393px) and (max-width: 576px) {
    font-size: ${(props) => props.theme.small};
  }
  @media (max-width: 392px) {
    font-size: ${(props) => props.theme.small};
  }
`;
const SeconLangWord = styled.span`
  font-size: ${(props) => props.theme.small};
  font-style: italic;
  @media (min-width: 577px) and (max-width: 767px) {
    font-size: ${(props) => props.theme.small};
  }
  @media (min-width: 393px) and (max-width: 576px) {
    font-size: ${(props) => props.theme.extraSmall};
  }
  @media (max-width: 392px) {
    font-size: ${(props) => props.theme.extraSmall};
  }
`;

const ClearAllButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  width: 10rem;
  font-size: 1.2rem;

  background: #001a1a;
  color: gold;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: gold;
    color: #001a1a;
  }
`;
const RemoveFromFlashcards = styled.img`
  max-width: 1.3rem;
  max-height: 1.3rem;
  margin-left: auto;
  cursor: pointer;
`;
const IconsWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;

  text-align: center;
  margin-left: auto;
  margin-right: 1rem;
  @media (max-width: 576px) {
    margin-right: 0;
    gap: 0.2rem;
  }
`;
const CheckboxWrapper = styled.div`
  /* width: 5rem; */
`;
const Input = styled.input`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  @media (max-width: 576px) {
    width: 1rem;
    height: 1rem;
  }
`;
const TrainingButton = styled(ClearAllButton)`
  background: gold;
  color: #001a1a;
  &:hover {
    background: #001a1a;
    color: gold;
  }
`;
const TrainAllButton = styled(TrainingButton)``;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem;
`;

const Jumble = styled(TrainingButton)`
  width: 10rem;
  background: #ffffff;
  color: #001a1a;
  &:hover {
    background: #001a1a;
    color: #ffffff;
  }
`;
const Blurry = styled(TrainingButton)`
  width: auto;
  margin-right: 2rem;
  background: #fff2f2;
  color: #001a1a;
  &:hover {
    background: #001a1a;
    color: #fff2f2;
  }
`;
const Message = styled.div``;
const TrainerButtons = styled.div`
  display: flex;
  border: 2px solid red;
  align-items: space-between;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
`;

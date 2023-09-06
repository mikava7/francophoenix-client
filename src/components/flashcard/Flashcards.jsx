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
    console.log("handleShowTrainer called"); // Add this line

    if (BlurryVocabularyRef.current) {
      setShowTrainer(true);
      // Calculate the scroll position to account for the fixed navbar
      const navbarHeight = 3 * 16; // 3rem (adjust as needed)
      const scrollPosition =
        BlurryVocabularyRef.current.offsetTop - navbarHeight;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
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
            <h2>{t("Exercices")}</h2>
            <Blurry onClick={() => setSelectedTrainer("blurry")}>
              Blurry Trainer
            </Blurry>
            <Blurry onClick={() => setSelectedTrainer("wordJumble")}>
              Word Jumble Trainer
            </Blurry>
            <Blurry onClick={() => setSelectedTrainer("FrQuizTrainer")}>
              Quiz
            </Blurry>
          </TrainerButtons>

          {/* Render the selected trainer only when flashcards are selected */}
          <TrainerContainer>
            {selectedTrainer === "blurry" && selectedFlashcards.length > 0 && (
              <TrainerBox ref={BlurryVocabularyRef}>
                <BlurryVocabularyTrainer
                  selectedFlashcards={selectedFlashcards}
                />
              </TrainerBox>
            )}
            {selectedTrainer === "wordJumble" &&
              selectedFlashcards.length > 0 && (
                <TrainerBox ref={BlurryVocabularyRef}>
                  <WordJumble selectedFlashcards={words} />
                </TrainerBox>
              )}
            {selectedTrainer === "FrQuizTrainer" &&
              selectedFlashcards.length > 0 && (
                <TrainerBox ref={BlurryVocabularyRef}>
                  <FrQuizTrainer
                    FrenchWord={selectedFlashcards.map((card) => card.word)}
                    secondLanguageWord={selectedFlashcards.map(
                      (card) => card.secondLanguage
                    )}
                  />
                </TrainerBox>
              )}
          </TrainerContainer>
        </FavoriteWordsUl>
      )}
    </FavoriteWordsContainer>
  );
};

export default Flashcards;
const FavoriteWordsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding: 0 0.1rem;
  margin: 0;
  overflow-x: hidden;
  @media (min-width: 767px) and (max-width: 913px) {
    max-width: 92%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    max-width: 98%;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    width: 100%;
  }
  @media (min-width: 359px) and (max-width: 393px) {
    width: 95%;
  }
  @media (min-width: 300px) and (max-width: 359px) {
    width: 80%;
  }
  @media (max-width: 300px) {
    width: 70%;
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
  align-items: center;
  min-height: 4rem;
  max-width: 95%;

  border-bottom: 3px solid ${(props) => props.theme.primaryText};
  border-right: 2px solid ${(props) => props.theme.primaryText};
  padding: 0.4rem 0.8rem;
  border-radius: 0 0 0 12px;
  margin: 0 0.5rem;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.secondaryBackground};
  @media (min-width: 767px) and (max-width: 913px) {
    max-width: 100%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
  }
  @media (min-width: 393px) and (max-width: 576px) {
    max-width: 100%;
    min-height: 3rem;
    /* outline: 1px solid red; */
  }
  @media (min-width: 359px) and(max-width: 392px) {
    width: 100%;
    /* min-height: 3rem; */
    /* outline: 1px solid red; */
  }
  @media (min-width: 280px) and(max-width: 358px) {
    width: 70%;
    /* min-height: 3rem; */
    outline: 1px solid red;
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
  font-weight: bold;

  cursor: pointer;
  background: ${(props) => props.theme.highlight3};
  color: ${(props) => props.theme.primaryText};

  &:hover {
    background: ${(props) => props.theme.primaryText};
    color: ${(props) => props.theme.highlight3};
  }

  @media (max-width: 576px) {
    width: 8rem;
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
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
    gap: 0.5rem;
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
  background: ${(props) => props.theme.highlight2};
  color: black;

  &:hover {
    background: ${(props) => props.theme.primaryBackground};
    color: ${(props) => props.theme.highlight2};
  }
`;
const TrainAllButton = styled(TrainingButton)``;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem;
  gap: 1rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.highlight2};
  @media (max-width: 576px) {
    /* width: 8rem;
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem; */
  }
`;
const TrainerButtons = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;
`;

const Blurry = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  overflow-x: hidden;
  width: 70%;
  padding: 1rem;
  margin: 1rem 0;
  font-size: ${(props) => props.theme.medium};
  background: ${(props) => props.theme.highlight2};

  cursor: pointer;
`;
const Message = styled.div``;

const TrainerContainer = styled.div`
  /* outline: 1px solid blue; */
  width: 100%;
  margin-top: 2rem;
  overflow-x: hidden;
  display: flex;
  align-items: center;
`;
const TrainerBox = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  /* outline: 1px solid red; */
  overflow-x: hidden;
  width: 97%;
`;

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
              FrQuizTrainer Trainer
            </Blurry>
          </TrainerButtons>

          {/* Render the selected trainer only when flashcards are selected */}
          {selectedTrainer === "blurry" && selectedFlashcards.length > 0 && (
            <Blurry ref={BlurryVocabularyRef}>
              <BlurryVocabularyTrainer
                selectedFlashcards={selectedFlashcards}
              />
            </Blurry>
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
    max-width: 98%;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    max-width: 98%;
    outline: 1px solid brown;
  }
  @media (max-width: 392px) {
    max-width: 95%;
    outline: 1px solid brown;
  }
  @media (max-width: 361px) {
    max-width: 85%;
  }
  @media (max-width: 340px) {
    max-width: 65%;
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
    max-width: 100%;
  }
  @media (min-width: 577px) and (max-width: 767px) {
  }
  @media (min-width: 393px) and (max-width: 576px) {
    max-width: 100%;
    min-height: 3rem;
  }
  @media (max-width: 392px) {
    max-width: 100%;
    min-height: 3rem;
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

  background: #001a1a;
  color: ${(props) => props.theme.highlight1};
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.highlight1};
    color: #001a1a;
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
  background: ${(props) => props.theme.highlight1};
  color: #001a1a;
  &:hover {
    background: #001a1a;
    color: ${(props) => props.theme.highlight1};
  }
`;
const TrainAllButton = styled(TrainingButton)``;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem;
  gap: 1rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.highlight3};
  @media (max-width: 576px) {
    /* width: 8rem;
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem; */
  }
`;
const TrainerButtons = styled.div`
  display: flex;
  flex-direction: column;

  align-items: space-between;

  width: 100%;
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
const Blurry = styled.button`
  width: auto;
  margin: 0.2rem;
  border-radius: 0.5rem;
  font-size: ${(props) => props.theme.medium};
  background: ${(props) => props.theme.highlight2};
  color: ${(props) => props.theme.primaryText};
  cursor: pointer;
`;
const Message = styled.div``;

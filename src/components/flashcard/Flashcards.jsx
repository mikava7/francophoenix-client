import { useState, useRef } from "react";
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
import WordTrainer from "../wordTrainer/WordTrainer";
import BlurryVocabularyTrainer from "./trainers/BlurryVocabularyTrainer";
const Flashcards = () => {
  const dispatch = useDispatch();
  const flashcards = useSelector((state) => state.flashcards.flashcards);
  const [selectedFlashcards, setSelectedFlashcards] = useState([]);
  const [showTrainer, setShowTrainer] = useState(false);

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
    // Scroll to the BlurryVocabularyTrainer component when it's shown
    BlurryVocabularyRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const selectAllWords = () => {
    setSelectedFlashcards([...flashcards]);
    handleShowTrainer();
  };
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
                  <CheckboxWrapper>
                    <input
                      type="checkbox"
                      id={`flashcard-${index}`}
                      checked={selectedFlashcards.includes(card)} // Use the card object itself for comparison
                      onChange={() => handleCheckboxChange(index)}
                    />
                    <label htmlFor={`flashcard-${index}`} />
                  </CheckboxWrapper>
                  <Listen />
                  <RemoveFromFlashcards
                    onClick={() => handleRemoveFlashcard(index)}
                    src={FlashcardIcon}
                    alt="FlashcardIcon"
                  />
                </IconsWrapper>
              </FavoriteInstance>
            );
          })}
          <ClearAllButton onClick={handleClearFlashcards}>
            Clear All
          </ClearAllButton>
          <TrainingButton
            onClick={() => {
              if (selectedFlashcards.length > 0) {
                handleShowTrainer();
              }
            }}
          >
            Start Training
          </TrainingButton>

          <TrainAllButton onClick={selectAllWords}>Train All</TrainAllButton>
          {showTrainer && (
            <Blury ref={BlurryVocabularyRef}>
              <BlurryVocabularyTrainer
                selectedFlashcards={selectedFlashcards}
              />
            </Blury>
            //     <WordTrainer selectedFlashcards={selectedFlashcards} />
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

  width: 100%;
  height: 100vh;
  margin: 0 auto;
  border-bottom: 2px solid green;
`;
const FavoriteWordsUl = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;

  border-radius: 12px;
  min-width: 420px;
  max-width: 920px;
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 1rem;
`;

const FavoriteInstance = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 4rem;
  max-width: 100%;
  border-bottom: 3px solid gold;
  padding: 0.5rem;
  border-radius: 0 0 0 12px;
  margin-bottom: 1rem;
`;
const FrenchWord = styled.span`
  font-size: 1.4rem;
  font-style: bold;
  color: #001a1a;
  &:after {
    content: " - ";
  }
`;
const SeconLangWord = styled.span`
  font-size: 1.2rem;
  font-style: italic;
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
  max-width: 1.5rem;
  max-height: 1.5rem;
  margin-left: auto;
  cursor: pointer;
`;
const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 60px;
  /* border: 1px solid grey; */
  max-width: 120px;
  text-align: center;
  margin-left: auto;
  margin-right: 1rem;
  /* pointer-events: ${(props) => (props.isExpanded ? "none" : "auto")}; */
`;
const CheckboxWrapper = styled.div`
  width: 5rem;
  input {
    cursor: pointer;
    width: 1.5rem; /* Make the input element wider */
    height: 1.5rem; /* Make the input element taller */
  }
`;
const TrainingButton = styled(ClearAllButton)`
  margin-top: 2rem;
  background: gold;
  color: #001a1a;
  &:hover {
    background: #001a1a;
    color: gold;
  }
`;
const TrainAllButton = styled(TrainingButton)``;

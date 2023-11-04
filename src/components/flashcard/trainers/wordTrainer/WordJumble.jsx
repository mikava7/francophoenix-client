import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useListenWord from "../../../../hooks/useListenWord";
import { Button } from "../../../../Styles/globalStyles";
import styled from "styled-components";
import { FaVolumeUp } from "react-icons/fa"; // Import the play icon

const WordJumble = ({ selectedFlashcards }) => {
  const { handleListen, isActiveStates } = useListenWord();

  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [selectedLetterIndices, setSelectedLetterIndices] = useState([]);
  const [jumbledLetters, setJumbledLetters] = useState([]);
  const [originalWord, setOriginalWord] = useState("");
  const [currentFlashcard, setCurrentFlashcard] = useState(null);
  const [availableLetters, setAvailableLetters] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (
      selectedFlashcards.length > 0 &&
      currentFlashcardIndex < selectedFlashcards.length
    ) {
      const flashcard = selectedFlashcards[currentFlashcardIndex];
      const lettersAndSpaces = flashcard.split("");

      setOriginalWord(flashcard);

      lettersAndSpaces.sort(() => Math.random() - 0.5);

      setAvailableLetters([...lettersAndSpaces]);
      setCurrentFlashcard(flashcard);
      setJumbledLetters([]);
      setIsCorrect(false);
      setIsSubmitted(false);
    }
  }, [selectedFlashcards, currentFlashcardIndex]);

  const handleJumbledLetterClick = (index) => {
    setSelectedLetterIndices(selectedLetterIndices.filter((i) => i !== index));
    setJumbledLetters(jumbledLetters.filter((_, i) => i !== index));
    setAvailableLetters([...availableLetters, jumbledLetters[index]]);
  };

  const handleLetterClick = (index) => {
    setSelectedLetterIndices([...selectedLetterIndices, index]);
    setJumbledLetters([...jumbledLetters, availableLetters[index]]);
    setAvailableLetters(availableLetters.filter((_, i) => i !== index));
  };

  const handleCheck = () => {
    const word = jumbledLetters.join("");
    const correct = word === originalWord;
    setIsCorrect(correct);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    setSelectedLetterIndices([]);
    setJumbledLetters([]);
    setIsCorrect(false);
    setIsSubmitted(false);
    if (currentFlashcardIndex + 1 < selectedFlashcards.length) {
      setCurrentFlashcardIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleRestart = () => {
    setSelectedLetterIndices([]);
    setJumbledLetters([]);
    setAvailableLetters(originalWord.split(""));
    setIsCorrect(false);
    setIsSubmitted(false);
  };

  return (
    <BuildBoxContainer>
      {/* Play button for listening to the word */}
      <PlayButton onClick={handleListen(currentFlashcard)}>
        <FaVolumeUp /> Listen
      </PlayButton>
      <Score>words in section: {selectedFlashcards?.length}</Score>
      <BuildBox>
        <JumbleBox>
          {/* Display jumbled letters */}
          {jumbledLetters.map((letter, index) => (
            <JumbleLetter
              key={index}
              onClick={() => handleJumbledLetterClick(index)}
              disabled={jumbledLetters.length >= originalWord.length}
              selected={true}
              correct={isSubmitted && isCorrect}
            >
              {letter}
            </JumbleLetter>
          ))}
        </JumbleBox>
        <LetterBox>
          {/* Display available letters */}
          {availableLetters.map((letter, index) => (
            <LetterButton
              key={index}
              onClick={() => handleLetterClick(index)}
              selected={selectedLetterIndices.includes(index)}
            >
              {letter}
            </LetterButton>
          ))}
        </LetterBox>
      </BuildBox>
      <CheckButton onClick={handleCheck} disabled={isSubmitted}>
        Check
      </CheckButton>
      {isSubmitted && isCorrect ? (
        <CorrectNotification>
          Correct! You assembled the word.
        </CorrectNotification>
      ) : isSubmitted ? (
        <WrongNotification>Incorrect! Try again.</WrongNotification>
      ) : null}
      <RestartButton onClick={handleRestart}>Restart</RestartButton>
    </BuildBoxContainer>
  );
};

export default WordJumble;
const BuildBoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 390px;
  max-width: 90%;
  min-height: 600px;
  margin: 1rem auto;
  background: ${(props) => props.theme.secondaryBackground};
  -webkit-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  -moz-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  color: ${(props) => props.theme.secondaryText};
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    max-width: 330px;
  }
`;
const BuildBox = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const JumbleBox = styled.div`
  background: ${(props) => props.theme.tertiaryBackground};
  margin: 0 auto;
  width: 100%;
  min-width: 390px;
  height: 10rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 576px) {
    min-width: 300px;
  }
`;

const LetterButton = styled.button`
  background: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.primaryText};

  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 4px;
`;

const JumbleLetter = styled(LetterButton)`
  /* border: ${(props) => (props.selected ? "1px solid blue" : "none")}; */

  color: ${(props) =>
    props.selected
      ? props.correct
        ? props.theme.primaryText
        : props.theme.secondaryText
      : props.theme.primaryText};

  background-color: ${(props) =>
    props.selected
      ? props.correct
        ? props.theme.correctBack
        : props.theme.wrongback
      : "blue"};
`;
const LetterBox = styled(JumbleBox)`
  width: 100%;
  height: 10rem;
  color: ${(props) => props.theme.tertiaryText};
  background: ${(props) => props.theme.tertiaryBackground};
`;
const PlayButton = styled(Button)`
  color: ${(props) => props.theme.primaryText};
  background-color: ${(props) => props.theme.primaryBackground};
  margin: 1rem;
  display: flex;
  align-items: center; // Center the icon and text
  gap: 8px; // Spacing between icon and text
  padding: 0.5rem;
  transition: transform 0.3s ease, background-color 0.3 ease;

  // Add hover effect
  &:hover {
    transform: scale(1.01);
    color: ${(props) => props.theme.primaryBackground};
    background-color: ${(props) => props.theme.primaryText};
  }
`;
const Congratulations = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${(props) => props.theme.primaryBackground};
  padding: 1rem;
  p {
    padding: 0.3rem 0.6rem;
    letter-spacing: 1.4px;
    letter-spacing: 1.4px;
    margin-bottom: 1rem;
  }
`;
const RestartButton = styled(Button)`
  background-color: #f1f7fcdd;
  color: ${(props) => props.theme.wrongback};
  &:hover {
    background-color: #ff4e07;
    color: #f1f7fcdd;
  }
`;
const CorrectNotification = styled.span`
  font-weight: bold;
  color: #f1f7fcdd;
`;
const WrongNotification = styled(CorrectNotification)`
  color: red;
`;
const Score = styled.span`
  margin-left: auto;
  margin-right: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
`;
const CheckButton = styled.button``;

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useListenWord from "../../../../hooks/useListenWord";
import { Button } from "../../../../Styles/globalStyles";
import styled from "styled-components";
import { FaVolumeUp } from "react-icons/fa"; // Import the play icon

const WordJumble = ({ selectedFlashcards }) => {
  // console.log("selectedFlashcards", selectedFlashcards);
  const { handleListen, isActiveStates } = useListenWord();

  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);

  // State for tracking selected letter indices
  const [selectedLetterIndices, setSelectedLetterIndices] = useState([]);

  // State for tracking jumbled letters
  const [jumbledLetters, setJumbledLetters] = useState([]);

  // State for tracking the original word
  const [originalWord, setOriginalWord] = useState("");

  // State for tracking the current flashcard
  const [currentFlashcard, setCurrentFlashcard] = useState(null);

  // State for tracking available letters
  const [availableLetters, setAvailableLetters] = useState([]);

  // Update flashcard data when selectedFlashcards or currentFlashcardIndex changes
  useEffect(() => {
    if (
      selectedFlashcards.length > 0 &&
      currentFlashcardIndex < selectedFlashcards.length
    ) {
      const flashcard = selectedFlashcards[currentFlashcardIndex];
      const lettersAndSpaces = flashcard.split(""); // Split by each character (including spaces)
      // console.log("lettersAndSpaces", lettersAndSpaces);

      setOriginalWord(flashcard);
      // console.log("flashcard", flashcard);

      lettersAndSpaces.sort(() => Math.random() - 0.5);

      setAvailableLetters([...lettersAndSpaces]);
      setCurrentFlashcard(flashcard);
      setJumbledLetters([]); // Reset jumbled letters
    }
  }, [selectedFlashcards, currentFlashcardIndex]);

  // Handle clicking on a letter button
  // Handle clicking on a jumbled letter
  const handleJumbledLetterClick = (index) => {
    setSelectedLetterIndices(selectedLetterIndices.filter((i) => i !== index));
    setJumbledLetters(jumbledLetters.filter((_, i) => i !== index));
    setAvailableLetters([...availableLetters, jumbledLetters[index]]);
  };

  // Handle clicking on an available letter
  const handleLetterClick = (index) => {
    setSelectedLetterIndices([...selectedLetterIndices, index]);
    setJumbledLetters([...jumbledLetters, availableLetters[index]]);
    setAvailableLetters(availableLetters.filter((_, i) => i !== index));
  };

  // Handle restarting the game
  const handleRestart = () => {
    setSelectedLetterIndices([]);
    setJumbledLetters([]);
    setAvailableLetters(originalWord.split(""));
  };
  // Check if the jumbled letters form the correct word
  const isCorrect = jumbledLetters.join("") === originalWord;
  const isAllLettersSelected =
    selectedLetterIndices.length === originalWord.length;

  const handleNext = () => {
    setSelectedLetterIndices([]);
    setJumbledLetters([]);
    if (currentFlashcardIndex + 1 < selectedFlashcards.length) {
      setCurrentFlashcardIndex((prevIndex) => prevIndex + 1);
    }
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

      {isAllLettersSelected && !isCorrect && (
        <WrongNotification>Incorrect! Try again.</WrongNotification>
      )}
      {isCorrect && (
        <div>
          <CorrectNotification>
            Correct! You assembled the word.
          </CorrectNotification>
          {currentFlashcardIndex < selectedFlashcards.length - 1 && (
            <Button onClick={handleNext}>Next</Button>
          )}
          {currentFlashcardIndex === selectedFlashcards.length - 1 && (
            <Congratulations>
              <p>Congratulations! You have completed all the words. </p>
              <RestartButton onClick={handleRestart}>Restart</RestartButton>
            </Congratulations>
          )}
        </div>
      )}
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
  background: #0055a4dd;
  -webkit-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  -moz-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  color: white;
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
  background-color: #8ae8ff;
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
  background-color: #8ae8ff;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 2rem;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 4px;
`;

const JumbleLetter = styled(LetterButton)`
  border: ${(props) => (props.selected ? "2px solid blue" : "none")};
  color: ${(props) => (props.selected ? "#e2ebf3dd" : "#8ae8ff")};
  background-color: ${(props) => (props.selected ? "#0055a4dd" : "none")};
`;
const LetterBox = styled(JumbleBox)`
  width: 100%;
  height: 10rem;
  color: black;
  background-color: #0055a4dd;
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
  background-color: #023668dd;
  padding: 1rem;
  p {
    padding: 0.3rem 0.6rem;
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

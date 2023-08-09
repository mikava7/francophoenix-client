import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  ContinueButton,
  CenteredMessageContent,
  FlexContainer,
} from "../../../Styles/globalStyles";

const BlurryVocabularyTrainer = ({ selectedFlashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [timer, setTimer] = useState(5);
  const [blurLevel, setBlurLevel] = useState(100);
  const [showPause, setShowPause] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const word = selectedFlashcards.map((flashcard) => flashcard.word);
  const translation = selectedFlashcards.map(
    (flashcard) => flashcard.secondLanguage
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (!showPause && !isPaused) {
        if (timer > 0) {
          setTimer((prevTimer) => prevTimer - 1);
          setBlurLevel((prevBlur) => prevBlur - 20);
        } else {
          setCurrentIndex((prevIndex) =>
            prevIndex === word.length - 1 ? 0 : prevIndex + 1
          );
          setWordCount((prevCount) => prevCount + 1);
          setTimer(5);
          setBlurLevel(100);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer, word, showPause, currentIndex, isPaused]);

  useEffect(() => {
    if (currentIndex > 0 && currentIndex % 4 === 0) {
      setShowPause(true);
    }
  }, [currentIndex]);

  const handleContinue = () => {
    setShowPause(false);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <Container>
      {showPause ? (
        <PauseScreen>
          <div>
            {" "}
            Words reviewed already
            <p>{wordCount}</p>
          </div>
          <CenteredMessageContent>Are you following?</CenteredMessageContent>
          <ContinueButton onClick={handleContinue}>Continue</ContinueButton>
        </PauseScreen>
      ) : (
        <>
          <WordBox>
            <Word>
              <Timer>{timer}</Timer>

              <span>{word[currentIndex]}</span>
            </Word>
            <TranslationBox style={{ filter: `blur(${blurLevel}px)` }}>
              <Translation>{translation[currentIndex]}</Translation>
            </TranslationBox>
          </WordBox>
        </>
      )}
      <PauseButton onClick={handlePause}>
        {isPaused ? "Resume" : "Pause"}
      </PauseButton>
    </Container>
  );
};

export default BlurryVocabularyTrainer;

const Container = styled(FlexContainer)`
  width: 100%;
  height: 100vh;
  border: 2px solid green;
  border: 2rem;
`;

const WordBox = styled.div`
  width: 365px;
  height: 600px;
  margin-bottom: 1rem;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #dec2ff;
`;

const Word = styled.span`
  font-size: 2rem;
  width: 100%;
  height: 20rem;

  border: 2px solid black;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  span {
    margin-top: -6rem;
  }
`;

const TranslationBox = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column; /* Added this line */
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  color: black;
  filter: ${(props) => `blur(${props.blurLevel}%)`}; /* Fix this line */
`;

const Translation = styled.span`
  font-size: 2rem;
  padding: 1rem 2rem;
  font-weight: bold;
  background: #61f061;
  color: #fff2f2;
`;

const Timer = styled.div`
  font-size: 2rem;
  margin-top: -3rem;
  color: #61f061;
`;

const PauseScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid black;

  width: 365px;
  height: 40rem;
  div {
    p {
      text-align: center;
      margin: 2rem;
      font-size: 2rem;
      font-style: bold;
      color: #61f061;
    }
  }
  p {
    margin-bottom: 2rem;
  }
`;
const PauseButton = styled(ContinueButton)`
  margin: 1rem;
  background-color: #3d3d3d;
  color: gold;
  &:hover {
    background-color: gold;
    color: #3d3d3d;
  }
`;

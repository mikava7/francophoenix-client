import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  ContinueButton,
  CenteredMessageContent,
  FlexContainer,
  Button,
  LightButton,
} from "../../../Styles/globalStyles";
import { useTranslation } from "react-i18next";

const BlurryVocabularyTrainer = ({ selectedFlashcards }) => {
  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [timer, setTimer] = useState(4);
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
          setBlurLevel((prevBlur) => prevBlur - 25);
        } else {
          setCurrentIndex((prevIndex) =>
            prevIndex === word.length - 1 ? 0 : prevIndex + 1
          );
          setWordCount((prevCount) => prevCount + 1);
          setTimer(4);
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
            {t("Mots déjà revus")}
            <p>{wordCount}</p>
          </div>
          <CenteredMessageContent>{t("Vous suivez ?")}</CenteredMessageContent>
          <LightButton onClick={handleContinue}>{t("Continue")}</LightButton>
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
      <Button onClick={handlePause}>{isPaused ? "Resume" : "Pause"}</Button>
    </Container>
  );
};

export default BlurryVocabularyTrainer;

const Container = styled(FlexContainer)`
  width: 99%;
  margin-top: 2rem;
  margin: 0 auto;
  overflow-x: hidden;
  /* background: ${(props) => props.theme.secondaryBackground}; */
`;

const WordBox = styled.div`
  width: 98%;
  height: 30rem;
  margin-bottom: 1rem;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.primaryBackground};
`;

const Word = styled.span`
  font-size: 2rem;
  width: 100%;
  height: 20rem;

  /* border: 2px solid black; */
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
  height: 18rem;
  display: flex;
  flex-direction: column; /* Added this line */
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.highlight2};

  filter: ${(props) => `blur(${props.blurLevel}%)`}; /* Fix this line */
`;

const Translation = styled.span`
  font-size: 2rem;
  padding: 1rem 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.primaryText};
`;

const Timer = styled.div`
  font-size: 2rem;
  margin-top: -3rem;
  color: ${(props) => props.theme.primaryText};
`;

const PauseScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid black;
  background: ${(props) => props.theme.tertiaryBackground};
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
  width: 100%;
  height: 38rem;
  div {
    p {
      text-align: center;
      margin: 2rem;
      font-size: 2.6rem;
      font-style: bold;
      color: ${(props) => props.theme.primaryText};
    }
  }
  p {
    margin-bottom: 2rem;
    font-size: 2.2rem;
  }
`;

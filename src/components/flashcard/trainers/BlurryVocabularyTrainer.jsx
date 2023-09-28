import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  ContinueButton,
  CenteredMessageContent,
  FlexContainer,
  Button,
  LightButton,
  ListenIcon,
} from "../../../Styles/globalStyles";
import useListenWord from "../../../hooks/useListenWord";

import { useTranslation } from "react-i18next";
import Listen from "../../Listen";

const BlurryVocabularyTrainer = ({ selectedFlashcards }) => {
  const { handleListen, isActiveStates } = useListenWord();

  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [timer, setTimer] = useState(4);
  const [blurLevel, setBlurLevel] = useState(100);
  const [showPause, setShowPause] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Add a state variable to track user's display choice
  const [displayWord, setDisplayWord] = useState(true);

  const word = selectedFlashcards?.map((flashcard) => flashcard.word);
  const translation = selectedFlashcards?.map(
    (flashcard) => flashcard.secondLanguage
  );
  // console.log("translation", translation);
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

  // Function to handle dropdown select change
  const handleDisplayChange = (event) => {
    setDisplayWord(event.target.value === "word");
  };
  const targetLanguageCode = localStorage.getItem("targetLanguageSelected");

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
            <DisplaySelect onChange={handleDisplayChange}>
              <option value="word">{t("Français")}</option>
              <option value="translation">
                {isGeorgian ? t("ქართული") : t("English")}
              </option>
            </DisplaySelect>
            <Word>
              <Timer>{timer}</Timer>

              <CurrentWord>
                <ListenIcon
                  onClick={handleListen(word[currentIndex], targetLanguageCode)}
                  isActive={isActiveStates[currentIndex]}
                >
                  <Listen />
                </ListenIcon>
                {displayWord ? word[currentIndex] : translation[currentIndex]}
              </CurrentWord>
            </Word>
            <TranslationBox style={{ filter: `blur(${blurLevel}px)` }}>
              <Translation>
                {displayWord ? translation[currentIndex] : word[currentIndex]}
              </Translation>
            </TranslationBox>
          </WordBox>
          <Button onClick={handlePause}>{isPaused ? "Resume" : "Pause"}</Button>

          {/* Dropdown select to toggle between word and translation */}
        </>
      )}
    </Container>
  );
};

export default BlurryVocabularyTrainer;

// Styled components remain unchanged

// Add a styled component for the dropdown select
const DisplaySelect = styled.select`
  margin-top: 1rem;
  font-size: 1rem;
  padding: 0.25rem;
`;
const Container = styled(FlexContainer)`
  margin-top: 2rem;
  margin: 0 auto;
  overflow-x: hidden;
  /* outline: 1px solid blue; */
  align-self: center;
  width: 370px;
  @media (min-width: 416px) and (max-width: 541px) {
    /* margin: 0; */
    width: 360px;
  }
  @media (min-width: 394px) and (max-width: 415px) {
    /* margin: 0; */
    width: 345px;
  }
  @media (min-width: 360px) and (max-width: 393px) {
    margin: 0;
    width: 330px;
  }
  @media (min-width: 301px) and (max-width: 359px) {
    width: 270px;
    margin: 0;
  }
  @media (max-width: 300px) {
    width: 240px;
    margin: 0;
  }
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
  margin: 0 auto;
  justify-content: space-around;
  flex-direction: column;
  span {
    margin-top: -6rem;
  }
`;

const CurrentWord = styled.span`
  display: flex;
  align-items: center;
  gap: 0.21rem;
  width: 90%;
  padding: 0.2rem 0.4rem;
  font-size: ${(props) => props.theme.extraLarge};
  margin: 0 auto;
  outline: 1px solid ${(props) => props.theme.highlight4};
  background: ${(props) => props.theme.secondaryBackground};
  justify-content: space-evenly;
`;
const TranslationBox = styled.div`
  width: 100%;
  height: 18rem;
  border-radius: 50%;
  /* margin: 1rem; */
  display: flex;
  flex-direction: column; /* Added this line */
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.highlight2};
  font-size: ${(props) => props.theme.medium};

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
  background: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
  width: 100%;
  outline: 1px solid red;
  height: 38rem;
  div {
    text-align: center;
    padding: 1rem;
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
  @media (min-width: 360px) and (max-width: 415px) {
    width: 350px;
  }
`;

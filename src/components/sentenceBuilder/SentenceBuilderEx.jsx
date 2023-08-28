import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSentences } from "../../redux/slices/sentence builder/sentenceBuild";

import useListenWord from "../../hooks/useListenWord";

import { NextButton } from "../verbs/presentTense/PresentTense";
import { Button } from "../../Styles/globalStyles";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";

const SentenceBuilderEx = ({ sentenceData }) => {
  console.log("sentenceData", sentenceData);
  const { handleListen, isActiveStates } = useListenWord();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const sentenceBuilders =
    useSelector((state) => state.sentences.sentences) || [];
  const [isSubmit, setIsSubmit] = useState(false);

  const [selectedWords, setSelectedWords] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const dataToRender = sentenceData || sentenceBuilders;

  useEffect(() => {
    if (!sentenceData) {
      dispatch(fetchSentences());
    }
  }, [dispatch, sentenceData]);

  // Get the sentence for the currently active sentence
  const sentence = dataToRender[sentenceIndex]?.sentence || "";
  // Get the words array for the currently active sentence
  const words = dataToRender[sentenceIndex]?.words || [];

  const handleWordSelect = (index) => {
    setSelectedWords((prevSelectedWords) => {
      if (prevSelectedWords.includes(index)) {
        return prevSelectedWords.filter((wordIndex) => wordIndex !== index);
      } else {
        return [...prevSelectedWords, index];
      }
    });
  };

  const handleWordRemove = (index) => {
    setSelectedWords((prevSelectedWords) => {
      return prevSelectedWords.filter((wordIndex) => wordIndex !== index);
    });
  };

  // console.log("selectedSentence", selectedSentence);
  // console.log("sentence", sentence);
  const handleCheckAnswer = () => {
    const selectedSentence = selectedWords
      .map((index) => words[index])
      .join(" ")
      .trim();

    // Normalize the sentence and selectedSentence by removing non-alphanumeric characters and converting to lowercase
    const normalizedSentence = sentence
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase();
    const normalizedSelectedSentence = selectedSentence
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase();

    const isEqual = normalizedSelectedSentence === normalizedSentence;

    setIsCorrect(isEqual);
    setIsSubmit(true);

    setShowAnswers(true);
  };

  const handleRetry = () => {
    setSelectedWords([]);
    setShowAnswers(false);
    setIsSubmit(false);
  };

  const handleNext = () => {
    setSelectedWords([]);
    setShowAnswers(false);
    if (sentenceIndex + 1 < dataToRender.length) {
      setSentenceIndex((prevIndex) => prevIndex + 1);
    }
  };

  const nextComponent = sentenceIndex === dataToRender.length - 1;
  return (
    <BuildBoxContainer>
      <h2>{t("Construire la phrase")}</h2>

      <Sentence onClick={handleListen(sentence)}>{sentence}</Sentence>

      <BuildBox>
        <TopBox isCorrect={isCorrect} isSubmit={isSubmit}>
          {selectedWords.map((wordIndex, index) => (
            <TopWord key={index} onClick={() => handleWordRemove(wordIndex)}>
              {words[wordIndex]}
            </TopWord>
          ))}
        </TopBox>
        <BottomBox>
          {words &&
            words.map((word, index) => (
              <BottomWord
                isSelected={selectedWords.includes(index)}
                key={index}
                onClick={() => handleWordSelect(index)}
              >
                {word}
              </BottomWord>
            ))}
        </BottomBox>
      </BuildBox>
      <div>
        {showAnswers ? (
          isCorrect ? (
            nextComponent ? (
              <div onClick={handleNext}>
                <Button>Continue</Button>
              </div>
            ) : (
              <div onClick={handleNext}>
                <Button>Next</Button>
              </div>
            )
          ) : (
            <div onClick={handleRetry}>
              <Button>Retry</Button>
            </div>
          )
        ) : (
          <div onClick={handleCheckAnswer}>
            <Button>Submit</Button>
          </div>
        )}
      </div>
    </BuildBoxContainer>
  );
};

export default SentenceBuilderEx;

const BuildBoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 0 auto; */
  width: 390px;

  margin: 1rem auto;

  -webkit-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  -moz-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);

  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.primaryText};
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    max-width: 370px;
  }
`;
export const BuildBox = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TopBox = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 12rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  color: black;
  position: relative;
  flex-wrap: wrap;
  display: flex;
  /* border: 2px solid ${(props) =>
    props.theme.primaryTetertiaryBackgroundxt}; */
  background-color: ${(props) =>
    props.isSubmit && props.isCorrect
      ? props.theme.correctBack
      : props.isSubmit && !props.isCorrect
      ? props.theme.wrongback
      : props.theme.tertiaryBackground};
`;

export const TopWord = styled.span`
  text-align: center;
  display: flex;
  background-color: ${(props) => props.theme.flagSecond};
  color: ${(props) => props.theme.flagFirst};
  border-bottom: 2px solid ${(props) => props.theme.flagFirst};

  cursor: pointer;
  text-align: center;
  font-size: 1.6rem;
  margin: 0.5rem;
  padding: 0.2rem;
  height: 3rem;
  border-radius: 4px;
`;
export const BottomBox = styled.div`
  background-color: ${(props) => props.theme.tertiaryBackground};
  /* color: ${(props) => props.theme.flagFirst}; */

  margin: 0 auto;
  width: 100%;
  min-width: 370px;
  height: 12rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

export const BottomWord = styled.button`
  text-align: center;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 1.6rem;
  margin: 0.5rem;
  padding: 0.2rem;
  height: 3rem;
  border-radius: 4px;
  max-width: 100%;
  border: none;
  display: ${(props) => (props.isSelected ? "none" : "block")};
`;
const Sentence = styled.p`
  display: none;
`;

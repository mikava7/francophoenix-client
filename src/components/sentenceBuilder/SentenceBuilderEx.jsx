import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSentences } from "../../redux/slices/sentence builder/sentenceBuild";

import useListenWord from "../../hooks/useListenWord";

import { NextButton } from "../verbs/presentTense/PresentTense";
import { Button } from "../../Styles/globalStyles";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";

const SentenceBuilderEx = ({ sentenceData }) => {
  // console.log("sentenceData", sentenceData);
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
                <Button>{t("Suivant")}</Button>
              </div>
            )
          ) : (
            <div onClick={handleRetry}>
              <Button>{t("Réessayer")}</Button>
            </div>
          )
        ) : (
          <div onClick={handleCheckAnswer}>
            <Button>{t("Soumettre")}</Button>
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
  width: 100%;

  margin: 0 0.3rem;

  -webkit-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  -moz-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);

  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.primaryText};
  @media (min-width: 393px) and (max-width: 576px) {
  }
  /* width: 100%; */
  @media (max-width: 392px) {
  }
  @media (max-width: 281px) {
    max-width: 100%;
  }
`;
export const BuildBox = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  margin: 0 auto;
  outline: 1px solid ${(props) => props.theme.highlight2};
  @media (min-width: 393px) and (max-width: 576px) {
    width: 360px;
  }
  /* width: 100%; */
  @media (max-width: 392px) {
    width: 340px;
  }
  @media (max-width: 281px) {
    overflow-x: scroll;
    width: 200px;
  }
`;
const TopBox = styled.div`
  margin: 0 auto;
  width: 340px;

  height: 14rem;
  margin-bottom: 2rem;
  margin-top: 2rem;

  position: relative;
  flex-wrap: wrap;
  display: flex;
  outline: 1px solid ${(props) => props.theme.primaryText};
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
  align-items: center;
  background-color: ${(props) => props.theme.highlight3};
  color: ${(props) => props.theme.primaryText};
  border-bottom: 2px solid ${(props) => props.theme.flagFirst};

  cursor: pointer;
  text-align: center;
  font-size: 1.5rem;
  margin: 0.5rem;
  padding: 0.2rem;
  height: 2.8rem;
  border-radius: 4px;
  @media (min-width: 393px) and (max-width: 576px) {
    font-size: 1.3rem;
  }
  @media (max-width: 392px) {
    font-size: 1.2rem;
    /* margin: 0.5rem; */
    /* padding: 0.2rem; */
  }
`;
export const BottomBox = styled(TopBox)`
  background-color: ${(props) => props.theme.tertiaryBackground};
  /* color: ${(props) => props.theme.flagFirst}; */
  outline: 1px solid ${(props) => props.theme.primaryText};
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

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSentences } from "../../redux/slices/sentence builder/sentenceBuild";

import useListenWord from "../../hooks/useListenWord";

import { SubmitButton, NextButton } from "../verbs/presentTense/PresentTense";
import styled, { css } from "styled-components";

const SentenceBuilderEx = () => {
  const { handleListen, isActiveStates } = useListenWord();

  const dispatch = useDispatch();
  const sentenceBuilders =
    useSelector((state) => state.sentences.sentences) || [];
  const [isSubmit, setIsSubmit] = useState(false);

  const [newPair, setNewPair] = useState(0);

  useEffect(() => {
    dispatch(fetchSentences());
  }, [dispatch]);

  const [selectedWords, setSelectedWords] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [sentenceIndex, setSentenceIndex] = useState(0);

  // Get the sentence for the currently active sentence
  const sentence = sentenceBuilders[sentenceIndex]?.sentence || "";
  // Get the words array for the currently active sentence
  const words = sentenceBuilders[sentenceIndex]?.words || [];

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

  const handleCheckAnswer = () => {
    const selectedSentence = selectedWords
      .map((index) => words[index])
      .join(" ")
      .trim();
    const isEqual = selectedSentence === sentence;

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
    if (sentenceIndex + 1 < sentenceBuilders.length) {
      setSentenceIndex((prevIndex) => prevIndex + 1);
    }
  };

  const nextComponent = sentenceIndex === sentenceBuilders.length - 1;

  return (
    <BuildBoxContainer>
      <h2>Build the Sentence</h2>
      <NextButton
        onClick={handleListen(sentence)}
        // disabled={isActiveStates}
      >
        Play the sentence
      </NextButton>
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
                <NextButton>Next</NextButton>
              </div>
            )
          ) : (
            <div onClick={handleRetry}>
              <SubmitButton>Retry</SubmitButton>
            </div>
          )
        ) : (
          <div onClick={handleCheckAnswer}>
            <SubmitButton>Submit</SubmitButton>
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
  margin: 0 auto;
  width: 390px;

  margin: 1rem auto;
  background: #0055a4dd;
  -webkit-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  -moz-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  color: white;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    max-width: 370px;
  }
`;
const TopBox = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 10rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  color: black;
  position: relative;
  flex-wrap: wrap;
  display: flex;

  background-color: ${(props) =>
    props.isSubmit ? (props.isCorrect ? "green" : "red") : "#ebf5ffdd"};
`;
export const BuildBox = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TopWord = styled.span`
  text-align: center;
  display: flex;
  background-color: #8ae8ff;
  cursor: pointer;
  align-items: center;
  font-size: 2rem;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 3rem;
  border-radius: 4px;
`;
export const BottomBox = styled.div`
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
`;
export const Button = styled.div`
  background-color: #70ff41;
  color: black;
  max-width: 100%;
  font-weight: bold;
  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 2px;
`;
export const BottomWord = styled.button`
  background-color: #46d0fa;
  text-align: center;
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 2rem;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 3rem;
  border-radius: 4px;
  max-width: 100%;
  border: none;
  display: ${(props) => (props.isSelected ? "none" : "block")};
`;
const Sentence = styled.p`
  display: none;
`;

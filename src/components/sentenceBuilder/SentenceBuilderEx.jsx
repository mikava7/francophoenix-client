import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSentences } from "../../redux/slices/sentence builder/sentenceBuild";

import useListenWord from "../../hooks/useListenWord";
import { fetchPresentTense } from "../../redux/slices/verbeTenses/presentTenseSlice";
import { NextButton } from "../verbs/presentTense/PresentTense";
import { Button } from "../../Styles/globalStyles";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import { scrollToContainer } from "../Utility/scrollToContainer";
import useScrollToTopOnRouteChange from "../../hooks/useScrollToTopOnRouteChange";
import CategorySelect from "./CategorySelect";
import { calculateNavbarHeight } from "./helpers";
import Verbs from "../verbs/Verbs";
// import VerbSelect from "./VerbSelect";
import {
  ModalContent,
  ModalText,
} from "../vocabulary/vocabularyTopics/modal/QuizModal";
const SentenceBuilderEx = ({ sentenceData, isActive }) => {
  // console.log("sentenceData", sentenceData);
  // console.log("isActive", isActive);

  const buildBoxRef = useRef();
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showModal, seTShowModal] = useState(false);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  useScrollToTopOnRouteChange();
  const { handleListen, isActiveStates } = useListenWord();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const sentenceBuilders =
    useSelector((state) => state.sentences.sentences) || [];
  // console.log("sentenceBuilders", sentenceBuilders);

  const presentTenseVerbe =
    useSelector((state) => state.presentTense.presentTense) || [];

  const [isSubmit, setIsSubmit] = useState(false);
  const [selectedWords, setSelectedWords] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const dataToRender = sentenceData || sentenceBuilders;
  const filteredSentences = () => {
    if (selectedCategory === "negative") {
      return dataToRender.filter((sentenceObj) =>
        sentenceObj.sentence.includes("pas")
      );
    } else if (selectedCategory === "interrogative") {
      return dataToRender.filter((sentenceObj) =>
        sentenceObj.sentence.includes("?")
      );
    } else if (selectedCategory === "simple") {
      return dataToRender.filter((sentenceObj) => sentenceObj.words.length < 4);
    } else {
      return dataToRender;
    }
  };
  useEffect(() => {
    if (!sentenceData) {
      dispatch(fetchSentences());
      dispatch(fetchPresentTense());
    }
  }, [dispatch, sentenceData]);

  // Filter sentences based on the selected category

  // Get the sentence for the currently active sentence
  const sentence = filteredSentences()[sentenceIndex]?.sentence || "";
  // Get the words array for the currently active sentence
  const words = filteredSentences()[sentenceIndex]?.words || [];

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
    setIsSubmit(false); // Reset isSubmit to false
    setIsCorrect(false); // Reset isCorrect to false
    const nextIndex = sentenceIndex + 1;

    if (nextIndex < filteredSentences().length) {
      setSentenceIndex(nextIndex);
    } else {
      // Handle end of sentences, perhaps display a completion message or navigate to a different screen
      console.log("End of sentences");
      seTShowModal(true);
    }
  };
  useEffect(() => {
    calculateNavbarHeight(setNavbarHeight);

    const handleResize = () => {
      calculateNavbarHeight(setNavbarHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      scrollToContainer(buildBoxRef, navbarHeight);
    }
  }, [isActive, navbarHeight]);

  const nextComponent = sentenceIndex === filteredSentences()?.length - 1;

  return (
    <>
      {/* <VerbSelect /> */}
      {!showModal ? (
        <BuildBoxContainer ref={buildBoxRef}>
          {/* <Header>
          <h4>{t("Construire la phrase")} </h4>
          <span>
            <h5>{t("Choisissez une catégorie")} </h5>
            <CategorySelect
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelect}
            />
          </span>
        </Header> */}
          <Sentence onClick={handleListen(sentence)}>{sentence}</Sentence>
          <h4>
            {t("Nombre de phrases")} :
            <span
              style={{
                padding: "0.3rem",
                fontSize: "1.1rem",
              }}
            >
              {sentenceData?.length}
            </span>
          </h4>
          <BuildBox>
            <TopBox isCorrect={isCorrect} isSubmit={isSubmit}>
              {selectedWords.map((wordIndex, index) => (
                <TopWord
                  key={index}
                  onClick={() => handleWordRemove(wordIndex)}
                >
                  {words[wordIndex]}
                </TopWord>
              ))}
            </TopBox>
            <BottomBox>
              {words &&
                words?.map((word, index) => (
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
                    <Button>{t("Continue")}</Button>
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
      ) : (
        <ModalContent>
          <ModalText>
            {" "}
            {t("Félicitations! Vous avez répondu correctement à tous.")}
          </ModalText>{" "}
          <Button onClick={() => seTShowModal(false)}>{t("Fermer")}</Button>
        </ModalContent>
      )}
    </>
  );
};

export default SentenceBuilderEx;

const BuildBoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;

  margin: 2rem auto;

  /* outline: 1px solid blue; */
  width: 320px;

  -webkit-box-shadow: 14px 25px 21px -19px rgba(27, 45, 61, 0.87);
  -moz-box-shadow: 14px 25px 21px -19px rgba(14, 29, 43, 0.87);
  box-shadow: 14px 25px 21px -19px rgba(11, 18, 26, 0.87);

  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.primaryText};
  @media (min-width: 393px) and (max-width: 576px) {
    width: 310px;
  }
  /* width: 100%; */
  @media (max-width: 392px) {
    width: 300px;
    /* outline: 1px solid red; */
  }
  @media (max-width: 300px) {
    width: 240px;
  }
`;
export const BuildBox = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  /* outline: 3px solid blue; */
  overflow-x: hidden;

  align-items: center;
  /* margin: 0 auto; */
  outline: 1px solid ${(props) => props.theme.highlight2};
  @media (min-width: 393px) and (max-width: 576px) {
    /* width: 360px; */
    /* outline: 3px solid blue; */
  }
  /* width: 100%; */
  @media (max-width: 392px) {
    /* width: 340px; */
  }
  @media (max-width: 362px) {
    overflow-x: scroll;
    width: 270px;
  }
  @media (max-width: 301px) {
    overflow-x: scroll;
    width: 210px;
  }
`;
const TopBox = styled.div`
  margin: 0 auto;
  width: 90%;

  height: 14rem;
  margin-bottom: 1rem;
  margin-top: 1rem;

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
  background-color: ${(props) => props.theme.facebookLogo};
  color: white;
  border-bottom: 2px solid ${(props) => props.theme.flagFirst};
  /* overflow-x: scroll; */
  cursor: pointer;
  text-align: center;
  font-size: 1.2rem;
  margin: 0.5rem;
  padding: 0.2rem;
  height: 2rem;
  border-radius: 4px;
  @media (min-width: 393px) and (max-width: 576px) {
    font-size: 1.2rem;
  }
  @media (max-width: 392px) {
    font-size: 1.1rem;
    margin: 0.4rem;
    padding: 0.2rem;
    /* outline: 1px solid blue; */
    height: 2rem;
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
  font-size: 1.2rem;
  margin: 0.5rem;
  padding: 0.2rem;
  height: 2rem;
  border-radius: 4px;
  max-width: 100%;
  border: none;
  display: ${(props) => (props.isSelected ? "none" : "block")};
  @media (max-width: 412px) {
    font-size: 1.4rem;
    margin: 0.4rem;
    padding: 0.2rem;
    /* outline: 1px solid blue; */
    height: 2rem;
  }
`;
const Sentence = styled.p`
  display: none;
`;
const Header = styled.div`
  /* display: flex; */
  align-items: center;

  gap: 1rem;
  /* margin-bottom: 0.5rem; */
  /* height: 4rem; */
  h4 {
    text-align: center;
    margin: 0;
  }
  span {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

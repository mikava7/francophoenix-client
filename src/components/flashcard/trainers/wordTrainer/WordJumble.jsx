import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useListenWord from "../../../../hooks/useListenWord";
import { Button } from "../../../../Styles/globalStyles";
import styled from "styled-components";
import { FaVolumeUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  SubmitButton,
  NextButton,
  RestartButton,
} from "../../../verbs/presentTense/PresentTense";
import { shuffleArray } from "../../../Utility/utils";
import { LoginMessageContainer } from "../../../vocabulary/vocabularyTopics/Text/TopicText";
import LinkWithPreviousPath from "../../../Utility/LinkWithPreviousPath";
import {
  submitVocabularyProgress,
  submitToGlobalWeakWord,
} from "../../../../redux/slices/quizPictures/quizPictures";
import { useParams } from "react-router-dom";
import { fetchUserProgress } from "../../../../redux/slices/userProgress/userProgressSlice";
import Loading from "../../../loading/Loading";

const WordJumble = ({
  selectedFlashcards,
  secondLanguage,
  topicType,
  userId,
  userProgress,
  exercises,
  loading,
}) => {
  const dispatch = useDispatch();
  const exerciseType = WordJumble.name;
  const { topicId } = useParams();
  const { handleListen, isActiveStates } = useListenWord();
  const { t } = useTranslation();
  console.log({ loading, userId, userProgress, exercises });
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [selectedLetterIndices, setSelectedLetterIndices] = useState([]);
  const [jumbledLetters, setJumbledLetters] = useState([]);
  const [originalWord, setOriginalWord] = useState("");
  const [currentFlashcard, setCurrentFlashcard] = useState(null);

  const [availableLetters, setAvailableLetters] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const allWordsHandled = currentFlashcardIndex == selectedFlashcards.length;
  const [showMessage, setShowMessage] = useState(false);

  const [completedSentenceIndices, setCompletedSentenceIndices] = useState([]);
  const [currentMode, setCurrentMode] = useState("normal");
  const [isTopicCompleted, setIsTopicCompleted] = useState(null);

  const [weakWords, setWeakWords] = useState(() => {
    // Check if there are existing weak words in the topic data
    const existingWeakWords =
      exercises && exercises.length > 0 ? exercises[0].weakWords : [];

    // Use existing weak words if available; otherwise, initialize as an empty array
    return existingWeakWords || [];
  });

  useEffect(() => {
    if (allWordsHandled) {
      // Trigger any actions you need when all words are handled
      setShowMessage(true);
    }
  }, [allWordsHandled]);

  useEffect(() => {
    // Set isTopicCompleted based on user progress
    const currentTopicProgress = userProgress.find(
      (topic) => topic.topic === topicId
    );
    setIsTopicCompleted(currentTopicProgress && currentTopicProgress.completed);
  }, [userId]);

  useEffect(() => {
    const index =
      exercises && exercises.length > 0
        ? exercises[0].completedSentenceIndices
        : [];

    // Check if there are completed indices, if yes, set the current index
    if (index.length > 0) {
      setCurrentFlashcardIndex(index[index.length - 1]);
    }

    // Set completedSentenceIndices to the values stored in exercises
    setCompletedSentenceIndices([...index]);
  }, [userId]);

  const handleTryWeakWords = () => {
    dispatch(fetchUserProgress(userId));
    // console.log("currentMode", currentMode);

    setCurrentMode("weakWords");

    // Check if exercises is an array and has at least one element
    if (Array.isArray(exercises) && exercises.length > 0) {
      const oldWeakWords = exercises[0].weakWords;
      setWeakWords(oldWeakWords || []); // Set weakWords to oldWeakWords or an empty array

      // Set the currentFlashcardIndex to the first element of oldWeakWords

      setCurrentFlashcardIndex(weakWords[0]);

      setShowMessage(false);
    }
    if (isTopicCompleted) {
      setIsTopicCompleted(false);
    }
  };

  useEffect(() => {
    if (currentMode === "weakWords") {
      const nextWeakWordIndex = selectedFlashcards.findIndex(
        (sentence, index) => !weakWords.includes(index)
      );
      // console.log("nextWeakWordIndex in useefect", nextWeakWordIndex);
      // Set the currentFlashcardIndex to the next incomplete index
      setCurrentFlashcardIndex(
        nextWeakWordIndex !== -1 ? weakWords[nextWeakWordIndex] : 0
      );
    }
    // console.log("setCurrentFlashcardIndex", currentFlashcardIndex);
  }, [currentMode, weakWords, dispatch]);

  useEffect(() => {
    if (
      selectedFlashcards.length > 0 &&
      currentFlashcardIndex < selectedFlashcards.length
    ) {
      const flashcard = selectedFlashcards[currentFlashcardIndex]
        .replace(/\s*\(.*\)/, "")
        .replace(/^(le\/la )/, "");

      const lettersAndSpaces = flashcard.split("");

      setOriginalWord(flashcard);

      // lettersAndSpaces.sort(() => Math.random() - 0.5);

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
    const inCorrect = word !== originalWord;

    if (userId && inCorrect) {
      dispatch(submitToGlobalWeakWord({ userId, weakWord: originalWord }));
    }

    setWeakWords((prevIndices) =>
      correct
        ? prevIndices
        : [...new Set([...prevIndices, +currentFlashcardIndex])]
    );
    setIsSubmitted(true);
    setIsCorrect(correct);
  };

  const handleNext = () => {
    setCompletedSentenceIndices((prevIndices) =>
      [...prevIndices, currentFlashcardIndex].sort((a, b) => a - b)
    );
    if (currentMode === "weakWords") {
      setCurrentFlashcardIndex(weakWords[0]);

      // Check if there are more weak words to handle
      const nextWeakWordIndex = weakWords.indexOf(currentFlashcardIndex) + 1;
      if (nextWeakWordIndex < weakWords.length) {
        // If there are more weak words, set the next weak word index
        setCurrentFlashcardIndex(weakWords[nextWeakWordIndex]);
      } else {
        // If all weak words are done, switch back to normal mode
        // console.log("currentFlashcardIndex in else", currentFlashcardIndex);

        setShowMessage(true);
        setCurrentMode("normal");
      }
    } else {
      // Handle normal mode increment
      setCurrentFlashcardIndex(currentFlashcardIndex);
    }
    // Calculate percentage for the completed sentences
    let percentage;
    const totalQuestions = selectedFlashcards?.length;

    if (topicType) {
      // If it's a noun, allocate 50% to WordJumble
      percentage = 40 / totalQuestions;
    } else {
      // If it's not a noun, allocate the remaining percentage to WordJumble
      percentage = 50 / totalQuestions;
    }
    const isLastIndex = selectedFlashcards.length - 1 === currentFlashcardIndex;

    // console.log(currentFlashcardIndex);

    // Submit the progress
    if (isAuthenticated) {
      dispatch(
        submitVocabularyProgress({
          userId,
          topicId,
          exerciseType,
          percentage,
          completedSentenceIndices,
          weakWords,
          topicType,
          completed: isLastIndex ? true : false,
        })
      );
    }
    setSelectedLetterIndices([]);
    setJumbledLetters([]);
    setIsCorrect(false);
    setIsSubmitted(false);

    if (
      currentMode !== "weakWords" ||
      currentFlashcardIndex < weakWords.length - 1
    ) {
      // Increment the index only if not in "weakWords" mode or if weak words are not completed
      setCurrentFlashcardIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleRestart = () => {
    // Check the current mode and handle accordingly

    if (currentMode === "weakWords") {
      // If in weak words mode, restart weak words
      setWeakWords([]);
    } else {
      // If in normal mode, restart the exercise
      setSelectedLetterIndices([]);
      setJumbledLetters([]);
      setAvailableLetters(shuffleArray(originalWord.split("")));
      setIsCorrect(false);
      setIsSubmitted(false);

      setCurrentFlashcardIndex(isTopicCompleted ? 0 : currentFlashcardIndex);
      setShowMessage(false);
      if (isTopicCompleted) {
        setIsTopicCompleted(false);
      }
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (isTopicCompleted) {
    return (
      <BuildBoxContainer>
        {/* Display a message indicating that the topic is already completed */}
        <FinalMessage>
          <p>{t("Ce sujet est déjà terminé !")}</p>
          {weakWords.length === 0 ? (
            <>
              <p>{t("Vous n'avez aucun mot faible.")}</p>

              <Button onClick={handleRestart}>{t("Recommencer")}</Button>
            </>
          ) : (
            <>
              <FinalMessage3>{t("Mots faibles")}</FinalMessage3>
              <p>{weakWords.length}</p>
              {/* {console.log("Current weakWords:", weakWords)} */}

              <WeakWordButton onClick={handleTryWeakWords}>
                {" "}
                {t("Pratiquer les mots faibles")}
              </WeakWordButton>
            </>
          )}
        </FinalMessage>
      </BuildBoxContainer>
    );
  }

  return (
    <BuildBoxContainer>
      {/* Play button for listening to the word */}

      {showMessage ? (
        <FinalMessage>
          <p>{t("Des mots")}</p>
          <p>
            {selectedFlashcards.length - weakWords.length}/
            {selectedFlashcards.length}
          </p>
          {weakWords.length > 0 ? (
            <>
              {/* {t("Toutes nos félicitations! Vous avez terminé tous les mots.")} */}
              <FinalMessage3>{t("Mots faibles")}</FinalMessage3>
              <p>{weakWords.length}</p>

              <WeakWordButton onClick={handleTryWeakWords}>
                {t("Pratiquer les mots faibles")}
              </WeakWordButton>
            </>
          ) : (
            <>
              <FinalMessage3>{t("Tous les mots sont corrects")}</FinalMessage3>
              <Button onClick={handleRestart}>{t("Recommencer")}</Button>
            </>
          )}
        </FinalMessage>
      ) : (
        <BuildBoxContainer>
          <PlayButton onClick={handleListen(currentFlashcard)}>
            <FaVolumeUp /> {t("Écouter")}
          </PlayButton>
          <p>Index: {currentFlashcardIndex}</p>
          <Score>
            {t("Des mots")}:{" "}
            {selectedFlashcards?.length - currentFlashcardIndex}
          </Score>
          <SecondLanguage>
            {secondLanguage[currentFlashcardIndex]}
          </SecondLanguage>
          <BuildBox>
            <JumbleBox>
              {/* Display jumbled letters */}
              {jumbledLetters.map((letter, index) => (
                <JumbleLetter
                  key={index}
                  onClick={() => handleJumbledLetterClick(index)}
                  disabled={jumbledLetters.length >= originalWord.length}
                  selected={true}
                  correct={isCorrect}
                  submitted={isSubmitted}
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
          <ButtonContainer>
            {isSubmitted && isCorrect ? (
              <CorrectNotification>
                {t("Correct !")}
                <NextButton onClick={handleNext}>{t("Suivante")}</NextButton>
              </CorrectNotification>
            ) : !isAuthenticated ? (
              <LoginMessageContainer>
                <p>
                  {t("Connectez-vous pour utiliser cet exercice:")}{" "}
                  <LinkWithPreviousPath to="/login">
                    {t("Connexion")}
                  </LinkWithPreviousPath>
                </p>
              </LoginMessageContainer>
            ) : isSubmitted ? (
              <WrongNotification>
                {t("C'est faux ! Essayer à nouveau.")}
                <RestartButton onClick={handleRestart}>
                  {t("Recommencer")}
                </RestartButton>
              </WrongNotification>
            ) : (
              <SubmitButton onClick={handleCheck} disabled={isSubmitted}>
                {t("Soumettre")}
              </SubmitButton>
            )}
          </ButtonContainer>
          <Button onClick={() => setCurrentFlashcardIndex(10)}>set</Button>
        </BuildBoxContainer>
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
  width: 333px;
  min-height: 600px;
  margin: 0rem auto;
  background: ${(props) => props.theme.secondaryBackground};
  -webkit-box-shadow: 14px 25px 21px -19px rgba(8, 21, 32, 0.87);
  -moz-box-shadow: 14px 25px 21px -19px rgba(220, 229, 236, 0.87);
  box-shadow: 14px 25px 21px -19px rgba(16, 35, 53, 0.87);
  color: ${(props) => props.theme.secondaryText};
  padding-bottom: 0.5rem;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    min-height: 580px;
  }

  @media (max-width: 540px) {
    width: 320px;
    min-height: 580px;
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
  width: 330px;
  height: 10rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 576px) {
    width: 320px;
  }
`;

const LetterButton = styled.button`
  background: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.primaryText};

  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 4px;
`;

const JumbleLetter = styled(LetterButton)`
  color: ${(props) =>
    props.selected
      ? props.correct
        ? props.theme.primaryText
        : props.theme.secondaryBackground
      : props.theme.primaryText};

  background-color: ${(props) =>
    props.selected
      ? props.submitted
        ? props.correct
          ? props.theme.correctBack
          : props.theme.wrongback
        : props.theme.tertiaryText
      : "red"};
`;
const LetterBox = styled(JumbleBox)`
  width: 100%;
  height: 10rem;
  color: ${(props) => props.theme.tertiaryText};
  background: ${(props) => props.theme.tertiaryBackground};
`;
const PlayButton = styled.button`
  color: ${(props) => props.theme.primaryBackground};
  background-color: ${(props) => props.theme.primaryText};
  margin: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.5rem 1rem;
  transition: transform 0.3s ease, background-color 0.3 ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    /* color: ${(props) => props.theme.primaryBackground};
    background-color: ${(props) => props.theme.primaryText}; */
  }

  @media (max-width: 540px) {
    /* Update styles for mobile screens */
    padding: 0.5rem; /* Adjust padding for smaller screens */
  }
`;

const CorrectNotification = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.highlight4};
  text-align: center;
`;
const WrongNotification = styled(CorrectNotification)`
  color: ${(props) => props.theme.wrongback};
`;
const Score = styled.span`
  margin-left: auto;
  margin-right: 1rem;
  font-size: 1rem;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.4rem;
  /* outline: 1px solid red; */
  width: 100%;
  height: 3rem;

  /* gap: 1rem; */
`;
const FinalMessage = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 2rem;
  color: ${(props) => props.theme.primaryText};
`;

const SecondLanguage = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
  color: ${(props) => props.theme.secondaryText};
`;
const WeakWordButton = styled(Button)`
  width: auto;
  padding: 1rem;
`;
const FinalMessage3 = styled.span`
  font-weight: 300;
`;

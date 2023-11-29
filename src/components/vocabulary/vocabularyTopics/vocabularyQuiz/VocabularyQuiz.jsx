import React, { useState, useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { StyledButton, Button } from "../../../../Styles/globalStyles";
import { useTranslation } from "react-i18next";
import { generateQuizQuestions } from "../../generateQuizQuestions";
import QuizModal from "../modal/QuizModal";
import { BackgroundOverlay } from "../../vocabularyStyles/styles";
import { useDispatch, useSelector } from "react-redux";

import Timer from "./Timer";
import Listen from "../../../Listen";
import { ListenIcon } from "../../../../Styles/globalStyles";
import useListenWord from "../../../../hooks/useListenWord";
import { LoginMessageContainer } from "../Text/TopicText";
import { StyledLink } from "../../../../Styles/globalStyles";
import LinkWithPreviousPath from "../../../Utility/LinkWithPreviousPath";
const VocabularyQuiz = ({ secondLanguage, wordsInTargetLanguage }) => {
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  const { handleListen, isActiveStates } = useListenWord();
  const targetLanguageCode = localStorage.getItem("targetLanguageSelected");
  const nativeLanguageCode = localStorage.getItem("nativeLanguageSelected");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // console.log("isAuthenticated", isAuthenticated);
  const [showModal, setShowModal] = useState(false);

  const [isAutoAnswerPaused, setIsAutoAnswerPaused] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const [demonstrativeMode, setDemonstrativeMode] = useState(false); // State to track demonstrative mode
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const toggleDemonstrativeMode = () => {
    setDemonstrativeMode(!demonstrativeMode);
  };

  const vocabularyQuizQuestions = useMemo(
    () => generateQuizQuestions(wordsInTargetLanguage, secondLanguage),
    [wordsInTargetLanguage, secondLanguage]
  );

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [incorrectlyAnsweredQuestions, setIncorrectlyAnsweredQuestions] =
    useState([]);

  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState({});

  const handleOptionClick = (questionIndex, optionIndex) => {
    if (answered[questionIndex]) return;

    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionIndex,
    });

    setAnswered({ ...answered, [questionIndex]: true });

    checkAnswer(questionIndex, optionIndex);

    // Calculate the index of the next question
    const nextQuestionIndex = questionIndex + 1;

    // Scroll to the next question if it exists with a delay of 1500 milliseconds (1.5 seconds)
    if (nextQuestionIndex < vocabularyQuizQuestions.length) {
      setTimeout(() => {
        const nextQuestion = document.getElementById(
          `question-${nextQuestionIndex}`
        );
        if (nextQuestion) {
          // Calculate the scroll position, considering the navbar height
          const navbarHeight = 20;
          // console.log("navbarHeight", navbarHeight);
          const scrollPosition =
            nextQuestion.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;
          // console.log("scrollPosition", scrollPosition);

          // Scroll to the first question, aligning it at the top of the viewport
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }
      }, 500);
    }
  };

  // console.log("currentQuestionRef", currentQuestionRef);
  const checkAnswer = (questionIndex, optionIndex) => {
    const selectedOption =
      vocabularyQuizQuestions[questionIndex].options[optionIndex];
    if (selectedOption !== vocabularyQuizQuestions[questionIndex].answer) {
      // If the answer is incorrect, add the question to the state variable
      setIncorrectlyAnsweredQuestions((prevQuestions) => [
        ...prevQuestions,
        vocabularyQuizQuestions[questionIndex],
      ]);
    }
    if (selectedOption === vocabularyQuizQuestions[questionIndex].answer) {
      setScore(score + 1);
    }
  };

  const restartQuiz = () => {
    setSelectedAnswers({});
    setAnswered({});
    setScore(0);

    // Calculate the index of the first question
    const firstQuestionIndex = 0;

    // Scroll to the first question if it exists
    const firstQuestion = document.getElementById(
      `question-${firstQuestionIndex}`
    );
    // console.log("firstQuestion", firstQuestion);
    if (firstQuestion) {
      const navbarHeight = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--navbar-height"
        )
      );
      const scrollPosition =
        firstQuestion.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;
      // console.log("scrollPosition", scrollPosition);

      // Scroll to the first question, aligning it at the top of the viewport
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const isAllCorrect = vocabularyQuizQuestions.every(
    (quizItem, questionIndex) => {
      const selectedOptionIndex = selectedAnswers[questionIndex];
      return (
        selectedOptionIndex !== undefined &&
        quizItem.options[selectedOptionIndex] === quizItem.answer
      );
    }
  );

  const autoAnswerQuestion = async () => {
    if (currentQuestionIndex < vocabularyQuizQuestions.length) {
      // Delay for 3 seconds before automatically selecting the correct answer
      await new Promise((resolve) => setTimeout(resolve, 3000));

      if (!isAutoAnswerPaused) {
        // Automatically select the correct answer
        const correctAnswerIndex = vocabularyQuizQuestions[
          currentQuestionIndex
        ].options.indexOf(vocabularyQuizQuestions[currentQuestionIndex].answer);

        handleOptionClick(currentQuestionIndex, correctAnswerIndex);

        // Check if this is the last question
        const isLastQuestion =
          currentQuestionIndex === vocabularyQuizQuestions.length - 1;

        // Move to the next question after a delay (if it's not the last question)
        if (!isLastQuestion) {
          setTimeout(() => {
            setCurrentQuestionIndex(currentQuestionIndex + 1);

            // Trigger auto-answering for the next question
            autoAnswerQuestion();
          }, 1500); // Delay of 1.5 seconds
        } else {
          setTimeout(() => {
            // Trigger auto-answering for the next question
            setShowModal(true);

            // After 2.5 seconds, refresh the page
            setTimeout(() => {
              window.location.reload();
            }, 2500); // Delay of 2.5 seconds
          }, 1500); // Delay of 1.5 seconds

          // Optionally, you can stop the auto-answering here or perform any other desired action.
        }
      }
    } else {
      // Quiz is finished, set demonstrativeMode to false and showModal to true
      // console.log("length in else.", vocabularyQuizQuestions.length);
      // console.log("length in else.", currentQuestionIndex);

      setDemonstrativeMode(false);
      // console.log("demonstrativeMode in else.", demonstrativeMode);

      setShowModal(true);
    }
  };
  useEffect(() => {
    // Check if it's the first question and the user is not authenticated
    if (currentQuestionIndex === 1 && !isAuthenticated) {
      return;
    }

    // Rest of the useEffect logic for handling quiz flow
    if (
      demonstrativeMode &&
      currentQuestionIndex < vocabularyQuizQuestions.length
    ) {
      autoAnswerQuestion();
    }
    if (currentQuestionIndex === vocabularyQuizQuestions.length - 1) {
      setDemonstrativeMode(false);
    }
  }, [demonstrativeMode, currentQuestionIndex, isAuthenticated]);

  const maxScore = vocabularyQuizQuestions.length;
  const isQuizFinished = Object.keys(answered).length === maxScore;

  useEffect(() => {
    if (isQuizFinished) {
      setShowModal(true);
    }
  }, [isQuizFinished]);

  return (
    <QuizContainer>
      {/* <button onClick={toggleDemonstrativeMode}>
        {demonstrativeMode
          ? "Disable Demonstrative Mode"
          : "Enable Demonstrative Mode"}
      </button> */}
      {answered[0] && !isAuthenticated ? (
        <LoginMessageContainer>
          <p>
            {t("Connectez-vous pour utiliser cet exercice:")}{" "}
            <LinkWithPreviousPath to="/login">
              {t("Connexion")}
            </LinkWithPreviousPath>
          </p>
        </LoginMessageContainer>
      ) : (
        <QuizBox>
          <QuizItem>
            {vocabularyQuizQuestions.map((quizItem, questionIndex) => (
              <QuizQuestionBox
                key={questionIndex}
                id={`question-${questionIndex}`}
              >
                {demonstrativeMode &&
                  currentQuestionIndex === questionIndex && (
                    <Timer initialTime={3} />
                  )}

                <h2>
                  {quizItem.question}
                  <ListenIcon
                    onClick={handleListen(
                      quizItem.question,
                      targetLanguageCode
                    )}
                    isActive={isActiveStates[questionIndex]}
                  >
                    <Listen />
                  </ListenIcon>{" "}
                </h2>
                <ul>
                  {quizItem.options.map((option, optionIndex) => (
                    <QuizOption
                      key={optionIndex}
                      onClick={() =>
                        handleOptionClick(questionIndex, optionIndex)
                      }
                      selectedAnswers={
                        selectedAnswers[questionIndex] === optionIndex
                      }
                      correctAnswer={
                        selectedAnswers[questionIndex] ===
                        quizItem.options.indexOf(quizItem.answer)
                      }
                      disabled={answered[questionIndex]}
                    >
                      {option}
                    </QuizOption>
                  ))}
                </ul>
                <Score>
                  {" "}
                  {t("Score")}: {score}/{vocabularyQuizQuestions.length}
                </Score>
              </QuizQuestionBox>
            ))}
          </QuizItem>
          <RestartButton onClick={restartQuiz}>
            {" "}
            {t("Recommencer")}
          </RestartButton>
        </QuizBox>
      )}
      {showModal && (
        <>
          <BackgroundOverlay />

          <QuizModal
            onClose={() => setShowModal(false)}
            isQuizFinished={isQuizFinished}
            isAllCorrect={isAllCorrect}
            incorrectlyAnsweredQuestions={incorrectlyAnsweredQuestions}
            Restart={
              <RestartButton onClick={restartQuiz}>
                {t("Recommencer")}
              </RestartButton>
            }
          />
        </>
      )}{" "}
    </QuizContainer>
  );
};

export default VocabularyQuiz;

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* max-width: 100%; */
`;
const QuizBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* outline: 1px solid red; */
  margin: 0 auto;
`;
const QuizItem = styled.div`
  /* outline: 1px solid blue; */
  margin: auto;
`;

const QuizQuestionBox = styled.div`
  /* border: 2px solid wheat; */
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 12px;
  color: ${(props) => props.theme.highlihgt1};
  background-color: ${(props) => props.theme.secondaryBackground};
  /* transition: scroll-behavior 3.5s ease-in-out; */
  width: 400px;

  h2 {
    padding: 1rem;
    border-radius: 1rem;
    margin-left: -0.5rem;
    gap: 1rem;
  }

  ul {
    list-style: none;
    /* border: 2px solid orange; */
    text-align: center;
    align-self: center;
  }
  @media (max-width: 450px) {
    width: 280px;
  }
`;

const QuizOption = styled.li`
  border: 1px solid ${(props) => props.theme.primaryText};
  padding: 0.5rem 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
  max-width: 100%;
  margin-left: -1rem;
  align-self: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) =>
    props.selectedAnswers
      ? props.correctAnswer
        ? props.theme.correctBack
        : props.theme.wrongback
      : props.theme.primaryBackground};
  color: ${(props) =>
    props.selectedAnswers ? "black" : props.theme.primaryText};

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "" : props.theme.tertiaryBackground};
    color: ${(props) => (props.disabled ? "" : props.theme.primaryText)};
  }
`;

const Score = styled.p`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  box-shadow: 0px 2px 4px ${(props) => props.theme.highlight2};
  margin-left: auto;
  width: 100px;
`;
const RestartButton = styled.button`
  padding: 1rem;
  text-align: center;
  align-self: center;
  width: 12rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;

  background-color: ${(props) => props.theme.highlight2};
  color: ${(props) => props.theme.primaryText};
  cursor: pointer;

  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme.primaryText};
    color: ${(props) => props.theme.highlight2};
  }
`;
const TimerDisplay = styled.span`
display:flex`;

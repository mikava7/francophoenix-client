import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { StyledButton, Button } from "../../../Styles/globalStyles";
import { useTranslation } from "react-i18next";
import { generateQuizQuestions } from "../generateQuizQuestions";
import QuizModal from "./modal/QuizModal";
const VocabularyQuiz = ({ french, english, georgian }) => {
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  const [showModal, setShowModal] = useState(false);
  const secondLanguage = isGeorgian ? georgian : english;
  const vocabularyQuizQuestions = useMemo(
    () => generateQuizQuestions(french, secondLanguage),
    [french, secondLanguage]
  );
  // console.log("vocabularyQuizQuestions", vocabularyQuizQuestions);
  ///////////////////////////////////////////////////////////
  const [selectedAnswers, setSelectedAnswers] = useState({});
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
  };

  const checkAnswer = (questionIndex, optionIndex) => {
    const selectedOption =
      vocabularyQuizQuestions[questionIndex].options[optionIndex];
    if (selectedOption === vocabularyQuizQuestions[questionIndex].answer) {
      setScore(score + 1);
    }
  };

  const restartQuiz = () => {
    setSelectedAnswers({});
    setAnswered({});
    setScore(0);
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
  const maxScore = vocabularyQuizQuestions.length;
  const isQuizFinished = Object.keys(answered).length === maxScore;

  useEffect(() => {
    if (isQuizFinished) {
      setShowModal(true);
    }
  }, [isQuizFinished]);

  return (
    <QuizContainer>
      <QuizItem>
        {vocabularyQuizQuestions.map((quizItem, questionIndex) => (
          <QuizQuestion key={questionIndex}>
            <Score>
              {" "}
              Score: {score}/{vocabularyQuizQuestions.length}
            </Score>
            <h2>{quizItem.question}</h2>

            <ul>
              {quizItem.options.map((option, optionIndex) => (
                <QuizOption
                  key={optionIndex}
                  onClick={() => handleOptionClick(questionIndex, optionIndex)}
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
          </QuizQuestion>
        ))}
      </QuizItem>
      <RestartButton onClick={restartQuiz}> {t("Recommencer")}</RestartButton>
      {showModal && (
        <QuizModal
          onClose={() => setShowModal(false)}
          isQuizFinished={isQuizFinished}
          isAllCorrect={isAllCorrect}
          Restart={
            <RestartButton onClick={restartQuiz}>
              {t("Recommencer")}
            </RestartButton>
          }
        />
      )}{" "}
    </QuizContainer>
  );
};

export default VocabularyQuiz;

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const QuizItem = styled.div`
  padding: 0 1rem;
  /* margin: 0 auto; */
  width: 95%;
`;

const QuizQuestion = styled.div`
  /* border: 2px solid wheat; */
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 12px;
  color: ${(props) => props.theme.highlihgt1};
  background-color: ${(props) => props.theme.secondaryBackground};
  h2 {
    padding: 1rem;
    border-radius: 1rem;
  }

  ul {
    list-style: none;
    /* border: 2px solid orange; */
    text-align: center;
    align-self: center;
  }
`;

const QuizOption = styled.li`
  border: 1px solid ${(props) => props.theme.tertiaryText};
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
      : "transparent"};
  color: ${(props) =>
    props.selectedAnswers ? "black" : props.theme.primaryText};

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "" : props.theme.primaryBackground};
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

import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { StyledButton } from "../../../Styles/globalStyles";
import { useTranslation } from "react-i18next";
import { generateQuizQuestions } from "../generateQuizQuestions";
const quizData = [
  {
    question: "What does 'fenêtre' mean in English?",
    options: ["Window", "Table", "Chair", "Door"],
    answer: "Window",
  },
  {
    question: "Find the French word for 'beautiful'",
    options: ["Petit", "Grand", "Moche", "Joli"],
    answer: "Joli",
  },
];

const VocabularyQuiz = ({ vocabularyData }) => {
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  const { french, english, georgian } = vocabularyData;
  const secondLanguage = isGeorgian ? georgian : english;
  const vocabularyQuizQuestions = useMemo(
    () => generateQuizQuestions(vocabularyData, secondLanguage),
    [vocabularyData, secondLanguage]
  );

  console.log("vocabularyQuizQuestions", vocabularyQuizQuestions);
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
  const isQuizFinished =
    Object.keys(answered).length === vocabularyQuizQuestions.length;
  return (
    <QuizContainer>
      <h2>Quiz name</h2>
      <h3>Number of Questions: {vocabularyQuizQuestions.length}</h3>
      <QuizItem>
        {vocabularyQuizQuestions.map((quizItem, questionIndex) => (
          <QuizQuestion key={questionIndex}>
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
      {!isAllCorrect && isQuizFinished && (
        <StyledButton onClick={restartQuiz}>Restart</StyledButton>
      )}
      <p>Score: {score}</p>
      <p>Total Questions: {vocabularyQuizQuestions.length}</p>
    </QuizContainer>
  );
};

export default VocabularyQuiz;

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid violet;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

const QuizItem = styled.div`
  border: 2px solid blueviolet;
  margin: 2rem;
  padding: 1rem;
`;

const QuizQuestion = styled.div`
  border: 2px solid wheat;
  margin: 2rem;
  padding: 1rem;

  h2 {
    border: 2px solid red;
    padding: 1rem;
    border-radius: 1rem;
  }

  ul {
    list-style: none;
  }
`;

const QuizOption = styled.li`
  border: 1px solid blue;
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) =>
    props.selectedAnswers
      ? props.correctAnswer
        ? "#7CCD7C"
        : "#FF9494"
      : "transparent"};
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "transparent" : "blueviolet"};
  }
`;

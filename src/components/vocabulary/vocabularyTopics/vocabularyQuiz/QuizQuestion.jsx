// QuizQuestion.js
import React from "react";
import styled from "styled-components";

const QuizQuestion = ({
  question,
  options,
  selectedAnswers,
  correctAnswer,
  disabled,
  onOptionClick,
  score,
  totalQuestions,
}) => {
  return (
    <QuestionContainer>
      <h2>{question}</h2>
      <ul>
        {options.map((option, optionIndex) => (
          <QuizOption
            key={optionIndex}
            onClick={() => onOptionClick(optionIndex)}
            selectedAnswers={selectedAnswers === optionIndex}
            correctAnswer={selectedAnswers === options.indexOf(option)}
            disabled={disabled}
          >
            {option}
          </QuizOption>
        ))}
      </ul>
      <Score>
        Score: {score}/{totalQuestions}
      </Score>
    </QuestionContainer>
  );
};

export default QuizQuestion;

const QuestionContainer = styled.div`
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 12px;
  color: ${(props) => props.theme.highlihgt1};
  background-color: ${(props) => props.theme.secondaryBackground};
  /* transition: scroll-behavior 3.5s ease-in-out; */

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

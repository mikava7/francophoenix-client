import React, { useEffect, useState } from "react";
import styled from "styled-components";
import wrongOptionsData from "../../../../data/wrongOptionsData";

const FrQuizTrainer = ({ FrenchWord, secondLanguageWord }) => {
  const [topicIndex, setTopicIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false); // Start the quiz when an option is clicked
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    generateQuizQuestion();
  }, [currentWordIndex, topicIndex]);

  const generateQuizQuestion = () => {
    if (quizCompleted) {
      setCurrentQuestion({}); // Quiz completed, show an empty question
      return;
    }

    if (FrenchWord.length === 0 || currentWordIndex >= FrenchWord.length) {
      // No more words available or no data, handle appropriately
      setQuizCompleted(true);
      return;
    }

    const currentWord = FrenchWord[currentWordIndex];
    const correctOption = secondLanguageWord[currentWordIndex];

    const options = [correctOption];

    while (options.length < 2) {
      const randomIndex = Math.floor(Math.random() * wrongOptionsData.length);
      const wrongOption = wrongOptionsData[randomIndex];
      if (!options.includes(wrongOption)) {
        options.push(wrongOption);
      }
    }

    options.sort(() => Math.random() - 0.5);

    setCurrentQuestion({
      question: currentWord,
      options: options,
      correctOption: correctOption,
    });
  };

  const handleOptionClick = (option) => {
    if (!quizStarted) {
      setQuizStarted(true);
    }

    if (option === currentQuestion.correctOption) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => {
      if (currentWordIndex + 1 < FrenchWord.length) {
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      } else {
        setCurrentWordIndex(0);
        setTopicIndex((prevIndex) => prevIndex + 1);
        setQuizCompleted(true);
      }
    }, 800);
  };

  return (
    <QuizContainer>
      <QuizBox>
        <h2>Topic Title</h2>
        <QuestionContainer>
          {currentQuestion.question && (
            <Question>{currentQuestion.question}</Question>
          )}
        </QuestionContainer>
        {quizCompleted ? (
          <EndMessage>
            {score === FrenchWord.length ? (
              <div>
                <h2>Congratulations! You mastered all words.</h2>
                <ul>
                  {FrenchWord.map((word) => (
                    <li>{word}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <h2>
                Quiz completed. You scored {score} out of {FrenchWord.length}.
              </h2>
            )}
            <RestartButton onClick={() => window.location.reload()}>
              {score === FrenchWord.length ? "Play Again" : "Retry"}
            </RestartButton>
          </EndMessage>
        ) : (
          Array.isArray(currentQuestion.options) &&
          currentQuestion.options.map((option, index) => (
            <Options
              key={index}
              onClick={() => handleOptionClick(option)}
              isSelected={currentQuestion.selectedOption === option}
              isCorrect={option === currentQuestion.correctOption}
            >
              {option}
            </Options>
          ))
        )}
      </QuizBox>
      <Score>Score: {score}</Score>
    </QuizContainer>
  );
};

export default FrQuizTrainer;

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;

  max-width: 390px;
  -webkit-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  -moz-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  background: #0055a4dd;
  color: white;
  @media (max-width: 576px) {
    max-width: 370px;

    display: flex;
    flex-direction: column;
  }
`;
const QuestionContainer = styled.div``;
const QuizBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`;
const Question = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
`;

const Options = styled.div`
  border-bottom: 2px solid blue;
  border-right: 2px solid blue;
  padding: 0.3rem 1rem;
  margin: 0.3rem 1rem;
  font-size: 1.2rem;

  cursor: pointer;
  border-radius: 0.5rem;
  max-width: 100%;
  width: 330px;
  align-self: center;

  background-color: ${(props) =>
    props.isSelected ? (props.isCorrect ? "green" : "red") : "#0f6dd8"};
  color: ${(props) =>
    props.isSelected ? (props.isCorrect ? "white" : "black") : ""};

  @media (max-width: 576px) {
    width: 300px;
  }
`;

const Score = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
const NextTopicButton = styled.button`
  padding: 1rem;
  text-align: center;
  align-self: center;
  width: 12rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  background-color: #0055a4;
  color: #ffffff;
  cursor: pointer;

  border-radius: 6px;
`;
const StartButton = styled.button`
  padding: 1rem;
  text-align: center;
  align-self: center;
  width: 10srem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  background-color: #0055a4;
  color: #ffffff;
  cursor: pointer;

  border-radius: 6px;

  &:hover {
    background-color: #ffffff;
    color: #0055a4;
  }
`;

const EndMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 250px;
`;
const RestartButton = styled.button`
  padding: 1rem;
  text-align: center;
  width: 10rem;
  font-size: 1.2rem;
  background-color: #0055a4;
  color: #ffffff;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background-color: #ffffff;
    color: #0055a4;
  }
`;

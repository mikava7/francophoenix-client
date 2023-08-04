import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizData } from "../../redux/slices/quizPictures/quizPictures";

const QuizPictures = () => {
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.quizData.quizData) || [];
  const isLoading = useSelector((state) => state.quizData.isLoading);
  const [topicIndex, setTopicIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false); // State to track if the quiz has started

  useEffect(() => {
    dispatch(fetchQuizData());
  }, []);

  useEffect(() => {
    generateQuizQuestion();
  }, [currentWordIndex, topicIndex]);

  const generateQuizQuestion = () => {
    if (!quizStarted) return; // Stop generating questions if the quiz has not started

    if (quizData.length === 0 || quizData.length <= topicIndex) return null;

    const topicData = quizData[topicIndex];
    if (!topicData || !topicData.words || topicData.words.length === 0)
      return null;

    const topicfrench = topicData.words.map((data) => data.french);

    const currentWord = topicData.words[currentWordIndex];

    // Create an array to hold the options for the quiz question
    const options = [];

    // Add the correct answer to the options array
    options.push(currentWord.french);

    // Generate three random wrong answers (excluding the correct answer)
    while (options.length < 4) {
      const randomIndex = Math.floor(Math.random() * topicfrench.length);
      if (
        topicfrench[randomIndex] !== currentWord.french &&
        !options.includes(topicfrench[randomIndex])
      ) {
        options.push(topicfrench[randomIndex]);
      }
    }

    // Shuffle the options array to randomize the order
    options.sort(() => Math.random() - 0.5);

    setCurrentQuestion({
      image: currentWord.imageUrl,
      options: options,
      correctOption: currentWord.french,
    });
  };

  const handleOptionClick = (option) => {
    if (!quizStarted) setQuizStarted(true); // Start the quiz when the first option is clicked

    if (option === currentQuestion.correctOption) {
      setScore((prevScore) => prevScore + 1);
    }

    // Store the selected option in the current question for styling purposes
    setCurrentQuestion((prevQuestion) => ({
      ...prevQuestion,
      selectedOption: option,
    }));

    // Delay resetting the selected option to provide some time to see the background color
    setTimeout(() => {
      if (currentWordIndex + 1 < quizData[topicIndex].words.length) {
        // Proceed to the next question within the same topic
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      } else {
        // All questions for the current topic are answered, move to the next topic
        setCurrentWordIndex(0);
        setTopicIndex((prevIndex) => prevIndex + 1);
      }
    }, 800); // Adjust the delay (in milliseconds) as needed
  };

  useEffect(() => {
    generateQuizQuestion();
  }, [currentWordIndex, quizStarted]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!quizStarted) {
    // Display the "Start" button
    return (
      <QuizWelcome>
        <WelcomeMessage>Welcome to the Quiz!</WelcomeMessage>

        <StartButton onClick={() => setQuizStarted(true)}>
          Start Quiz
        </StartButton>
      </QuizWelcome>
    );
  }

  if (quizData.length === 0 || quizData.length <= topicIndex) {
    return <div>No data available for the quiz.</div>;
  }

  return (
    <QuizContainer>
      <QuizBox>
        <h2>Topic Title </h2>
        {currentQuestion.image && (
          <QuestionImage src={currentQuestion.image} alt="Quiz Question" />
        )}
        {Array.isArray(currentQuestion.options) ? (
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
        ) : (
          <div>
            No options available for the current question.
            <StartButton onClick={() => setQuizStarted(true)}>
              Restart Quiz
            </StartButton>
          </div>
        )}
      </QuizBox>
      <Score>Score: {score}</Score>
      {/* <NextTopicButton
        onClick={() => setTopicIndex((prevIndex) => prevIndex + 1)}
      >
        Next Topic
      </NextTopicButton> */}
    </QuizContainer>
  );
};
export default QuizPictures;

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  max-width: 400px;
  margin: 0 auto;
  background: #0055a4dd;
  color: white;
`;
const QuizBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const QuestionImage = styled.img`
  max-width: 300px;
  margin-bottom: 1rem;
`;

const Options = styled.div`
  border: 2px solid blue;
  padding: 0.3rem 1rem;
  margin: 0.3rem 1rem;
  font-size: 1.2rem;

  cursor: pointer;
  border-radius: 1rem;
  max-width: 100%;
  width: 300px;
  align-self: center;
  background-color: ${(props) =>
    props.isSelected ? (props.isCorrect ? "green" : "red") : "#0055a4"};
  color: ${(props) =>
    props.isSelected ? (props.isCorrect ? "white" : "black") : ""};
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
const QuizWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  margin-top: 2rem;
  max-width: 400px;
  width: 100%;
  background-color: #0055a4dd;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const WelcomeMessage = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`;

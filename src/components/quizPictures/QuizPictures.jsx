import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizData } from "../../redux/slices/quizPictures/quizPictures";
import RotatingChevron from "../Utility/RotatingChevron";
import CategoryDropdown from "./CategoryDropdown";
const QuizPictures = () => {
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.quizData.quizData) || [];
  const isLoading = useSelector((state) => state.quizData.isLoading);
  const [topicIndex, setTopicIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(true); // State to track if the quiz has started
  const [selectedCategory, setSelectedCategory] = useState("");

  // console.log("quizData", quizData);
  useEffect(() => {
    dispatch(fetchQuizData());
  }, []);

  useEffect(() => {
    if (quizData.length > 0 && quizStarted) {
      generateQuizQuestion();
    }
  }, [currentWordIndex, quizData, quizStarted]);

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
  const handleRestart = () => {
    setScore(0);
    setCurrentWordIndex(0); // Reset the word index to 0 to start the quiz from the beginning
    setTopicIndex(0); // Reset the topic index to 0 to start the quiz from the beginning
    setQuizStarted(true); // Start the quiz
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (quizData.length === 0 || quizData.length <= topicIndex) {
    return (
      <QuizContainer>
        <EndMessage>
          <h2>No data available for the quiz.</h2>
          <StartButton onClick={handleRestart}>Restart Quiz</StartButton>
        </EndMessage>
      </QuizContainer>
    );
  }

  return (
    <QuizContainer>
      <QuizBox>
        <CategoryDropdown />

        <ImageContainer>
          {currentQuestion.image && (
            <QuestionImage src={currentQuestion.image} alt="Quiz Question" />
          )}
        </ImageContainer>
        {Array.isArray(currentQuestion.options) &&
          currentQuestion.options.map((option, index) => (
            <Options
              key={index}
              onClick={() => handleOptionClick(option)}
              isSelected={currentQuestion.selectedOption === option}
              isCorrect={option === currentQuestion.correctOption}
            >
              {option}
            </Options>
          ))}
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
  margin: 1rem auto;

  max-width: 390px;
  -webkit-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  -moz-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  background-color: ${(props) => props.theme.flagFirst};
  color: ${(props) => props.theme.flagSecond};
  @media (max-width: 576px) {
    max-width: 370px;

    display: flex;
    flex-direction: column;
  }
`;
const QuizBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;

  select {
    width: 100%;
    background-color: ${(props) => props.theme.flagAddon};
    color: ${(props) => props.theme.flagFirst};
    padding: 1rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.flagFirst};
      color: ${(props) => props.theme.flagAddon};
    }
  }
`;
const QuestionImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Options = styled.div`
  border-bottom: 2px solid blue;
  border-right: 2px solid blue;
  padding: 0.3rem 1rem;
  margin: 0.3rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.5rem;
  max-width: 100%;
  width: 330px;
  align-self: center;

  background-color: ${(props) => {
    // console.log("props.isCorrect", props.isCorrect);
    return props.isSelected
      ? props.isCorrect
        ? "green"
        : "red"
      : props.theme.flagAddon;
  }};

  color: ${(props) =>
    props.isSelected
      ? props.isCorrect
        ? "white"
        : "black"
      : props.theme.flagFirst};

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
const ImageContainer = styled.div`
  display: flex;

  align-items: center;
  width: 350px;
  height: 250px;
  background: white;
  margin-bottom: 1rem;
`;
const EndMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 250px;
`;
const CategoryItem = styled.li``;

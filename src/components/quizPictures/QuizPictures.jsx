import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTopicNames,
  fetchQuizData,
} from "../../redux/slices/quizPictures/quizPictures";
import RotatingChevron from "../Utility/RotatingChevron";
import CategoryDropdown from "./CategoryDropdown";
import Loading from "../loading/Loading";
import { Button } from "../../Styles/globalStyles";
const QuizPictures = () => {
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.quizData.currentTopic) || [];
  const topicNames = useSelector((state) => state.quizData.topicNames) || [];
  const isLoading = useSelector((state) => state.quizData.isLoading);

  // console.log({ quizData, topicNames, isLoading });
  const [topicIndex, setTopicIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentTopicQuestions, setCurrentTopicQuestions] = useState([]);
  // console.log("currentTopicQuestions", currentTopicQuestions);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const topic = topicNames.map((topic) => topic.topic);

  const [selectedCategory, setSelectedCategory] = useState(topic[0]);

  useEffect(() => {
    dispatch(fetchTopicNames());
  }, [dispatch]);

  useEffect(() => {
    const id = topicNames[topicIndex]?._id;
    dispatch(fetchQuizData(id));
  }, [selectedCategory, dispatch, topicIndex, topicNames]);

  useEffect(() => {
    if (quizData.length > 0) {
      if (!quizCompleted) {
        generateQuizQuestions();
      }
    }
  }, [quizData, quizStarted, quizCompleted]);

  const generateQuizQuestions = () => {
    const questions = quizData.map((item) => {
      const options = generateOptions(item.french);
      console.log(options);
      return {
        image: item.imageUrl,
        options: options,
        correctOption: item.french,
        selectedOption: "",
      };
    });
    setCurrentTopicQuestions(questions);
    setQuizCompleted(false);
  };

  const generateOptions = (correctOption) => {
    const allFrench = quizData.map((item) => item.french);
    const incorrectOptions = [];

    while (incorrectOptions.length < 3) {
      const randomIndex = Math.floor(Math.random() * allFrench.length);
      const randomFrench = allFrench[randomIndex];

      if (
        randomFrench !== correctOption &&
        !incorrectOptions.includes(randomFrench)
      ) {
        incorrectOptions.push(randomFrench);
      }
    }

    incorrectOptions.push(correctOption);
    incorrectOptions.sort(() => Math.random() - 0.5);

    return incorrectOptions;
  };

  // Rest of the component code...

  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    const selectedCategoryIndex = topic.indexOf(selectedCategory);
    setTopicIndex(selectedCategoryIndex);
    setScore(0);
    setCurrentWordIndex(0);
    setQuizStarted(true);
    generateQuizQuestions();
  };

  const handleOptionClick = (option) => {
    if (!quizStarted) setQuizStarted(true);

    const currentQuestion = currentTopicQuestions[currentWordIndex];
    const newQuestions = [...currentTopicQuestions];
    newQuestions[currentWordIndex] = {
      ...currentQuestion,
      selectedOption: option,
    };

    if (option === currentQuestion.correctOption) {
      setScore((prevScore) => prevScore + 1);
    }

    setCurrentTopicQuestions(newQuestions);

    setTimeout(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex + 1 < currentTopicQuestions.length ? prevIndex + 1 : 0
      );
      setCurrentQuestionIndex((prevIndex) =>
        prevIndex + 1 < currentTopicQuestions.length ? prevIndex + 1 : 0
      );
      if (currentWordIndex === currentTopicQuestions.length - 1) {
        setQuizCompleted(true); // Set quizCompleted to true when reaching the last question
      }
    }, 800); // Delay before moving to the next question
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentWordIndex(0);
    setCurrentQuestionIndex(0);
    setQuizStarted(false);
    setQuizCompleted(false);
    setCurrentTopicQuestions(
      currentTopicQuestions.map((question) => ({
        ...question,
        selectedOption: "",
      }))
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!quizData) {
    return <Loading />;
  }

  return (
    <QuizContainer>
      <QuizBox>
        <CategoryDropdown
          topic={topic}
          onCategoryChange={handleCategoryChange}
        />
        {quizCompleted ? (
          <EndMessage>
            <ScoreMessage>
              Your final score is:
              <Score>
                {score} / {currentTopicQuestions.length}
              </Score>
            </ScoreMessage>
            <div>
              <p>Do you want to restart?</p>
              <RestartButton onClick={restartQuiz}>Restart</RestartButton>
            </div>
            <p>You can choose another topic from the dropdown menu above</p>
          </EndMessage>
        ) : (
          currentTopicQuestions.map((currentQuestion, index) => {
            if (index === currentQuestionIndex) {
              const { image, correctOption, options, selectedOption } =
                currentQuestion;
              return (
                <QuizBox key={index}>
                  <ImageContainer>
                    <QuestionImage src={image} alt={correctOption} />
                  </ImageContainer>
                  {options.map((option) => (
                    <Options
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      isSelected={selectedOption === option}
                      isCorrect={option === correctOption}
                    >
                      {option}
                    </Options>
                  ))}
                  <Score>Score: {score}</Score>
                </QuizBox>
              );
            }
            return null;
          })
        )}
      </QuizBox>
    </QuizContainer>
  );
};

export default QuizPictures;

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin: 1rem auto;

  max-width: 390px;
  -webkit-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  -moz-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  background-color: ${(props) => props.theme.flagFirst};
  color: ${(props) => props.theme.flagSecond};
  height: 700px;
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
  padding: 0.6rem 1rem;
  margin: 0.6rem 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.5rem;
  max-width: 100%;
  width: 330px;
  align-self: center;
  background-color: ${(props) =>
    props.isSelected
      ? props.isCorrect
        ? "green"
        : "red"
      : props.theme.flagAddon};

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

const Score = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  display: center;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 4px solid white;
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
  background-color: ${(props) => props.theme.flagAddon};
  color: ${(props) => props.theme.flagFirst};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 350px;
  height: 100%;
  div {
    p {
      font-size: 1.2rem;
      margin-top: 2rem;
    }
  }
  p {
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 2rem;
    background-color: #f0e5e5;
    padding: 1rem;
  }
`;
const ScoreMessage = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  span {
    border-bottom: 3px solid blue;
    padding-bottom: 0.2rem;
    margin-left: 0.5rem;
  }
`;
const RestartButton = styled(Button)`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.buttonBack};
  height: 3rem;
  font-size: 1.4rem;
  &:hover {
    background-color: ${(props) => props.theme.buttonBack};
    color: ${(props) => props.theme.background};
  }
`;

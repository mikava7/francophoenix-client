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
import { setTimeout } from "timers";
const QuizPictures = () => {
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.quizData.currentTopic) || [];
  const topicNames = useSelector((state) => state.quizData.topicNames) || [];
  const isLoading = useSelector((state) => state.quizData.isLoading);
  console.log("quizData", quizData);
  console.log("topicNames", topicNames);

  const [topicIndex, setTopicIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const topic = topicNames.map((topic) => topic.topic);
  const [selectedCategory, setSelectedCategory] = useState(topic[0]);

  useEffect(() => {
    dispatch(fetchTopicNames());
  }, [dispatch]);

  useEffect(() => {
    const id = topicNames[topicIndex]?._id;
    console.log("id", id);
    dispatch(fetchQuizData(id));
    generateQuizQuestion();
  }, [selectedCategory, dispatch, topicIndex, topicNames]);

  useEffect(() => {
    if (quizData.length > 0 && quizStarted) {
      generateQuizQuestion();
    }
  }, [quizData, quizStarted]);

  const generateQuizQuestion = () => {
    const topicData = quizData;
    if (!topicData || !topicData.words || topicData.words.length === 0) return;

    const currentWord = topicData.words[currentWordIndex];
    console.log("currentWord", currentWord);
    if (currentWord.imageUrl.length > 0) {
      const topicfrench = topicData.words.map((data) => data.french);
      const options = [currentWord.french];
      while (options.length < 4) {
        const randomIndex = Math.floor(Math.random() * topicfrench.length);
        if (
          topicfrench[randomIndex] !== currentWord.french &&
          !options.includes(topicfrench[randomIndex])
        ) {
          options.push(topicfrench[randomIndex]);
        }
      }
      options.sort(() => Math.random() - 0.5);

      setCurrentQuestion({
        image: currentWord.imageUrl,
        options: options,
        correctOption: currentWord.french,
        selectedOption: "",
      });
    } else {
      setCurrentQuestion({
        image: null,
        options: [], // Reset the options when there's no image
        correctOption: currentWord.french,
        selectedOption: "",
      });
      setTimeout(() => {
        if (currentWordIndex + 1 < topicData.words.length) {
          setCurrentWordIndex((prevIndex) => prevIndex + 1);
        } else {
          setCurrentWordIndex(0);
          setTopicIndex((prevIndex) => prevIndex + 1);
        }
      });
    }
  };

  const handleOptionClick = (option) => {
    if (!quizStarted) setQuizStarted(true);

    if (option === currentQuestion.correctOption) {
      setScore((prevScore) => prevScore + 1);
    }

    setCurrentQuestion((prevQuestion) => ({
      ...prevQuestion,
      selectedOption: option,
    }));

    setTimeout(() => {
      setCurrentWordIndex((prevIndex) => prevIndex + 1);

      // If we've reached the end of the current topic's words, move to the next topic
      if (currentWordIndex + 1 >= quizData.words.length) {
        setCurrentWordIndex(0);
        setTopicIndex((prevIndex) => prevIndex + 1);
      }
    }, 800);
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentWordIndex(0);
    setTopicIndex(0);
    setQuizStarted(true);
  };

  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    const selectedCategoryIndex = topic.indexOf(selectedCategory);
    // console.log("selectedCategory", selectedCategory);
    // console.log("selectedCategoryIndex", selectedCategoryIndex);

    setTopicIndex(selectedCategoryIndex);
    setScore(0);
    setCurrentWordIndex(0);
    setQuizStarted(true);
    generateQuizQuestion(); // Call generateQuizQuestion directly after setting the state
  };

  if (isLoading) {
    return <Loading />; // Adjust the loading component
  }
  if (!quizData) {
    return <Loading />; // Adjust the loading component
  }
  // console.log("currentQuestion", currentQuestion);

  return (
    <QuizContainer>
      <QuizBox>
        <CategoryDropdown
          topic={topic}
          onCategoryChange={handleCategoryChange}
        />

        {currentQuestion.image !== null && (
          <ImageContainer>
            <QuestionImage
              src={currentQuestion.image}
              alt={currentQuestion._id}
            />
          </ImageContainer>
        )}

        {currentQuestion.image !== null &&
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
          ))}
      </QuizBox>
      <Score>Score: {score}</Score>
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

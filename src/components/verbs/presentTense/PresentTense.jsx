import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPresentTense } from "../../../redux/slices/verbeTenses/presentTenseSlice";
import Loading from "../../loading/Loading";
import styled from "styled-components";

const PresentTense = () => {
  const dispatch = useDispatch();
  const presentTenseVerbe =
    useSelector((state) => state.presentTense.presentTense.presentTenseVerbs) ||
    [];
  const isLoading = useSelector((state) => state.presentTense.isLoading);
  const error = useSelector((state) => state.presentTense.error);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [answers, setAnswers] = useState(
    Array(presentTenseVerbe.length).fill("")
  );
  const [allAnswersCorrect, setAllAnswersCorrect] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [hasNextSet, setHasNextSet] = useState(true);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  useEffect(() => {
    dispatch(fetchPresentTense());
  }, [dispatch]);

  useEffect(() => {
    // Check if presentTenseVerbe is fetched
    if (presentTenseVerbe.length > 0) {
      // Update the currentQuestions state when questionIndex changes
      setCurrentQuestions(
        presentTenseVerbe.slice(questionIndex, questionIndex + 5)
      );
    }
  }, [questionIndex, presentTenseVerbe]);

  const handleOptionSelect = (index, word) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index + questionIndex] = word;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    // Check if all questions are answered before proceeding
    if (
      currentQuestions.every(
        (question, index) => answers[index + questionIndex] !== ""
      )
    ) {
      const areAllAnswersCorrect = currentQuestions.every((question, index) => {
        return answers[index + questionIndex] === question.correctAnswer;
      });

      // Update the allAnswersCorrect state
      setAllAnswersCorrect(areAllAnswersCorrect);

      // Show the correct and incorrect answers
      setShowAnswers(true);

      // Calculate the number of correct answers
      const correctAnswersCount = currentQuestions.reduce(
        (count, question, index) => {
          return answers[index + questionIndex] === question.correctAnswer
            ? count + 1
            : count;
        },
        0
      );

      // Update the score based on the number of correct answers
      setCurrentScore((prevScore) => prevScore + correctAnswersCount);

      // Show the next set of questions after 2 seconds
      setTimeout(handleNextQuestions, 1200);
    }
  };

  const handleNextQuestions = () => {
    if (questionIndex + 5 >= presentTenseVerbe.length) {
      // No more sets of questions, disable the next set button
      setHasNextSet(false);
    } else {
      setQuestionIndex((prevIndex) => prevIndex + 5);
      setAnswers(Array(presentTenseVerbe.length).fill("")); // Reset answers to empty array
      setShowAnswers(false);
    }
  };

  const handleRestart = () => {
    setQuestionIndex(0);
    setAnswers(Array(presentTenseVerbe.length).fill(""));
    setAllAnswersCorrect(false);
    setShowAnswers(false);
    setCurrentScore(0);
    setHasNextSet(true);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <QuestionContainer>
      <Score>
        Score: {currentScore}/{presentTenseVerbe.length}
      </Score>
      {currentQuestions.map((question, index) => {
        const underscoreIndex = question.sentence.indexOf("_");
        const beforeUnderscore = question.sentence.slice(0, underscoreIndex);
        const afterUnderscore = question.sentence.slice(underscoreIndex + 5);
        return (
          <QuestionBox key={index}>
            {index + 1 + questionIndex}: {beforeUnderscore}
            <span>
              {question.words.map((word, wordIndex) => (
                <WordOption
                  key={wordIndex}
                  onClick={() => handleOptionSelect(index, word)}
                  data-questioncorrectanswer={question.correctAnswer === word}
                  data-usersanswer={answers[index + questionIndex]}
                  data-showanswers={
                    showAnswers && answers[index + questionIndex] === word
                  }
                  data-allanswerscorrect={allAnswersCorrect}
                >
                  {word}
                </WordOption>
              ))}
              {afterUnderscore}
            </span>
          </QuestionBox>
        );
      })}

      {showAnswers && !allAnswersCorrect && hasNextSet ? (
        <SubmitButton onClick={handleSubmit} disabled>
          Submit
        </SubmitButton>
      ) : (
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      )}

      {showAnswers && !allAnswersCorrect && !hasNextSet && (
        <FinalScore>
          {" "}
          Your final score is: {currentScore}
          <RestartButton onClick={handleRestart}>Restart</RestartButton>
        </FinalScore>
      )}
    </QuestionContainer>
  );
};

export default PresentTense;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 390px;
  margin: 1rem auto;
  background: #0055a4dd;
  -webkit-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  -moz-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  color: white;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    max-width: 370px;
  }
`;
const QuestionBox = styled.div`
  background-color: #0f6dd8;
  border-bottom: 2px solid blue;
  border-right: 2px solid blue;
  padding: 0.3rem;
  color: white;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  letter-spacing: 0.2px;
  margin: 0.3rem 1rem;

  width: 360px;
  @media (min-width: 576px) and (max-width: 766px) {
    flex-direction: column;
  }

  @media (max-width: 576px) {
    width: 320px;
  }
`;
const getOptionBackgroundColor = (props) => {
  const isUserAnswer = props["data-usersanswer"] === props.children;
  const isShowAnswers = props["data-showanswers"];
  const isQuestionCorrectAnswer = props["data-questioncorrectanswer"];

  if (isUserAnswer && isShowAnswers) {
    if (isQuestionCorrectAnswer) {
      return "green"; // selected correct
    } else {
      return "red"; // selected wrong
    }
  } else if (isUserAnswer) {
    return "violet"; // selected
  } else if (isShowAnswers && props["data-allanswerscorrect"] === "true") {
    return "green"; // all answers correct
  } else {
    return "white";
  }
};

const WordOption = styled.button`
  border-radius: 8px;
  font-size: 1.2rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  gap: 1rem;
  color: black;
  background-color: ${(props) => {
    return getOptionBackgroundColor(props);
  }};

  &:first-child {
    margin-right: 0.3rem;
    margin-left: 0.3rem;
  }
  &:last-child {
    margin-right: 0.3rem;
  }
  &:hover {
    transform: scale(1.1);
    color: rgb(40, 175, 253);
  }
`;
const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 1rem auto;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  width: 10rem;
  font-size: 1.2rem;

  background: #f8ffff;
  color: #0f6dd8;
  font-weight: bold;
  margin-bottom: 2rem;
  cursor: pointer;
  &:hover {
    background: #0f6dd8;
    color: #f8ffff;
  }
`;
const Score = styled.span`
  padding: 0.5rem;
  background: #7bb5f8;
  margin-left: auto;
`;
const FinalScore = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #7bb5f8;
  font-size: 1.2rem;
  border-radius: 8px 8px 0 0;
`;
const RestartButton = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  text-align: center;
  width: 10rem;
  font-size: 1.2rem;
  background-color: #0055a4;
  color: #ffffff;
  cursor: pointer;
  border: 2px solid #000c18;
  border-radius: 6px;

  &:hover {
    background-color: #ffffff;
    color: #0055a4;
  }
`;
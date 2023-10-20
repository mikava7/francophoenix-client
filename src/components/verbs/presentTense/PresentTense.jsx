import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPresentTense } from "../../../redux/slices/verbeTenses/presentTenseSlice";
import Loading from "../../loading/Loading";
import styled from "styled-components";
import useScrollToTopOnRouteChange from "../../../hooks/useScrollToTopOnRouteChange";
import { useTranslation } from "react-i18next";
import {
  fetchVerbList,
  getVerbExercises,
} from "../../../redux/slices/verbeTenses/verbExerciseSlice";

const PresentTense = ({ presentTenseVerbe }) => {
  useScrollToTopOnRouteChange();
  const { t } = useTranslation();
  const dispatch = useDispatch();

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
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [showRetryButton, setShowRetryButton] = useState(false);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
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

      // Show the Retry and Next buttons
      setShowSubmitButton(false);
      setShowRetryButton(!areAllAnswersCorrect);
    }
  };

  const handleNext = () => {
    // Show the next set of questions after clicking Next
    if (questionIndex + 5 >= presentTenseVerbe.length) {
      // No more sets of questions, show the final score
      setHasNextSet(false);
    } else {
      setQuestionIndex((prevIndex) => prevIndex + 5);
      setShowAnswers(false);
      setShowSubmitButton(true);
      setShowRetryButton(false);
      setAnswers(Array(presentTenseVerbe.length).fill("")); // Reset answers to empty array
    }
  };

  const handleRetry = () => {
    // Reset the state to allow the user to retry the questions
    setShowAnswers(false);
    setShowSubmitButton(true);
    setShowRetryButton(false);
    setAnswers(Array(presentTenseVerbe.length).fill(""));

    // Calculate the number of correct answers in the current set
    const correctAnswersCount = currentQuestions.reduce(
      (count, question, index) => {
        return answers[index + questionIndex] === question.correctAnswer
          ? count + 1
          : count;
      },
      0
    );

    // Deduct the score of the current set from the total score
    setCurrentScore((prevScore) => prevScore - correctAnswersCount);
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
        Score: {currentScore}/{presentTenseVerbe?.length}
      </Score>
      {currentQuestions.map((question, index) => {
        const underscoreIndex = question.sentence.indexOf("_");
        const beforeUnderscore = question.sentence.slice(0, underscoreIndex);
        const afterUnderscore = question.sentence.slice(underscoreIndex + 5);

        const shuffledWords = shuffleArray(question.words);

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
      <ButtonContainer>
        {/* Render different buttons based on the state */}
        {showSubmitButton && (
          <SubmitButton onClick={handleSubmit}>{t("Soumettre")}</SubmitButton>
        )}
        {showAnswers && !allAnswersCorrect && hasNextSet && (
          <>
            {showRetryButton ? (
              <>
                <SubmitButton onClick={handleRetry}>
                  {t("Recommencer")}
                </SubmitButton>
                <NextButton onClick={handleNext}>{t("Suivant")}</NextButton>
              </>
            ) : (
              <>
                <SubmitButton onClick={handleSubmit}>
                  {t("Soumettre")}
                </SubmitButton>
                {/* <NextButton onClick={handleNext}>{t("Suivant")}</NextButton> */}
              </>
            )}
          </>
        )}
        {/* {console.log("allAnswersCorrect", allAnswersCorrect)} */}
        {allAnswersCorrect && (
          <NextButton onClick={handleNext}>{t("Suivant")}</NextButton>
        )}
        {showAnswers && !allAnswersCorrect && !hasNextSet && (
          <FinalScore>
            {t("Score")}: {currentScore}
            <RestartButton onClick={handleRestart}>
              {t("Redémarrer")}
            </RestartButton>
          </FinalScore>
        )}
      </ButtonContainer>
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
  background: ${(props) => props.theme.secondaryBackground};
  -webkit-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  -moz-box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  box-shadow: 14px 25px 21px -19px rgba(0, 85, 164, 0.87);
  /* outline: 1px solid red; */

  color: ${(props) => props.theme.primaryText};
  @media (min-width: 394px) and (max-width: 576px) {
    display: flex;
    flex-direction: column;

    width: 100%;
  }
  @media (max-width: 394px) {
    width: 90%;
    margin: 0 auto;
  }
  @media (max-width: 301px) {
    width: 100%;
  }
`;
const QuestionBox = styled.div`
  background: ${(props) => props.theme.tertiaryBackground};
  color: ${(props) => props.theme.primaryText};

  border-bottom: 2px solid ${(props) => props.theme.primaryBackground};
  border-right: 2px solid ${(props) => props.theme.primaryBackground};
  padding: 0.5rem 0.3rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  letter-spacing: 0.2px;
  margin: 0.3rem 1rem;
  /* margin-top: 1rem; */
  width: 300px;
  @media (min-width: 576px) and (max-width: 766px) {
    flex-direction: column;
  }

  @media (min-width: 394px) and (max-width: 576px) {
    width: 290px;
  }
  @media (max-width: 394px) {
    width: 270px;
  }
  @media (max-width: 301px) {
    width: 200px;
  }
`;
const getOptionBackgroundColor = (props) => {
  const isUserAnswer = props["data-usersanswer"] === props.children;
  const isShowAnswers = props["data-showanswers"];
  const isQuestionCorrectAnswer = props["data-questioncorrectanswer"];

  if (isUserAnswer && isShowAnswers) {
    if (isQuestionCorrectAnswer) {
      return "#4CAF50";
    } else {
      return "#F44336";
    }
  } else if (isUserAnswer) {
    return "#a89eaa"; // Purple (selected)
  } else if (isShowAnswers && props["data-allanswerscorrect"] === "true") {
    return "#4CAF50"; // Green (all answers correct)
  } else {
    return props.theme.secondaryBackground; // Use your theme's secondary background color
  }
};

const WordOption = styled.button`
  border-radius: 8px;
  font-size: 1.2rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  gap: 1rem;
  color: ${(props) => props.theme.primaryText};
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
export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  width: 10rem;
  font-size: 1.2rem;

  background: ${(props) => props.theme.primaryBackground};
  color: ${(props) => props.theme.primaryText};
  font-weight: bold;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.primaryText};
    color: ${(props) => props.theme.primaryBackground};
  }

  @media (min-width: 394px) and (max-width: 576px) {
    width: 8rem;
  }
  @media (min-width: 301px) and (max-width: 394px) {
    width: 7rem;
  }
  @media (max-width: 301px) {
    width: 6rem;
  }
`;
const Score = styled.span`
  padding: 0.5rem;
  background: #7bb5f8;
  margin-left: auto;
  margin-right: 1rem;
`;
const FinalScore = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  /* background-color: ${(props) => props.theme.highlight1}; */
  font-size: 1.2rem;
  border-radius: 8px 8px 0 0;
  margin-bottom: 2rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-top: 0.4rem;
  gap: 1rem;
`;
const RestartButton = styled.button`
  padding: 0.5rem 1rem;
  text-align: center;
  width: 10rem;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.primaryText};
  color: ${(props) => props.theme.primaryBackground};
  cursor: pointer;
  border: 2px solid #000c18;
  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme.primaryBackground};
    color: ${(props) => props.theme.primaryText};
  }
`;
export const NextButton = styled(SubmitButton)`
  background: ${(props) => props.theme.primaryText};
  color: ${(props) => props.theme.primaryBackground};
  &:hover {
    background: ${(props) => props.theme.primaryBackground};
    color: ${(props) => props.theme.primaryText};
  }
`;

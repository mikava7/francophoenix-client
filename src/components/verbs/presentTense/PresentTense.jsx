import React, { useState, useEffect, useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPresentTense,
  submitTensePercentage,
} from "../../../redux/slices/verbeTenses/presentTenseSlice";
import Loading from "../../loading/Loading";
import styled from "styled-components";
import useScrollToTopOnRouteChange from "../../../hooks/useScrollToTopOnRouteChange";
import { useTranslation } from "react-i18next";
import {
  fetchVerbList,
  getVerbExercises,
} from "../../../redux/slices/verbeTenses/verbExerciseSlice";
import { useParams } from "react-router-dom";
import axios from "../../../redux/api/axiosInstance";
import { calculateTensePercentage } from "../helper";
const PresentTense = ({ presentTenseVerbe, tense }) => {
  console.log("presentTenseVerbe in PresentTense", presentTenseVerbe);
  console.log("tense in PresentTense", tense);

  useScrollToTopOnRouteChange();
  const exerciseType = PresentTense.name;
  const { verb } = useParams();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.auth?.auth?.user) || {};
  const userId = auth?._id;
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
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [incorrectlyAnsweredQuestions, setIncorrectlyAnsweredQuestions] =
    useState([]);
  // console.log(incorrectlyAnsweredQuestions);
  const [answered, setAnswered] = useState(
    Array(currentQuestions.length).fill(false)
  );
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  useEffect(() => {
    dispatch(fetchPresentTense());
  }, [dispatch]);

  useEffect(() => {
    if (presentTenseVerbe.length > 0) {
      setCurrentQuestions(
        presentTenseVerbe.slice(questionIndex, questionIndex + 1)
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
    if (answers.every((answer) => answer !== "")) {
      const newScore = answers.reduce((count, answer, index) => {
        return answer === presentTenseVerbe[index].correctAnswer
          ? count + 1
          : count;
      }, 0);

      setCurrentScore(newScore);

      const areAllAnswersCorrect = answers.every((answer, index) => {
        return answer === presentTenseVerbe[index].correctAnswer;
      });

      setAllAnswersCorrect(areAllAnswersCorrect);
      setSubmitted(true);
      // Update the `answered` state for all questions
      setAnswered(Array(presentTenseVerbe.length).fill(true));
      setQuestionIndex(0);

      // Calculate the incorrectly answered questions
      const incorrectAnswers = presentTenseVerbe.filter(
        (question, index) => answers[index] !== question.correctAnswer
      );

      setIncorrectlyAnsweredQuestions(incorrectAnswers);

      // Show the correct and incorrect answers
      setShowAnswers(true);
      const tensePercentage = calculateTensePercentage(
        presentTenseVerbe,
        answers
      );
      // console.log("Tense Percentage:", tensePercentage);
      // submitTensePercentage(userId, verb, tense, exerciseType, tensePercentage);
      // console.log("tensePercentage in component", tensePercentage);

      if (userId && tensePercentage) {
        dispatch(
          submitTensePercentage({
            userId,
            verb,
            tense,
            exerciseType,
            tensePercentage,
          })
        );
      }
    }
  };

  const handleNext = () => {
    // Show the next set of questions after clicking Next
    if (questionIndex + 1 === presentTenseVerbe.length) {
      setShowSubmitButton(true);
      setHasNextSet(false);
    } else if (answers[questionIndex]) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
      setShowAnswers(false);
      setShowSubmitButton(false);
    }
  };

  const handleRestart = () => {
    setQuestionIndex(0);
    setAnswers(Array(presentTenseVerbe.length).fill(""));
    setShowAnswers(false);
    setCurrentScore(0);
    setSubmitted(false);
    setShowSubmitButton(false);
    setAnswered(Array(presentTenseVerbe.length).fill(false));
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
        {t("Score")}: {currentScore}/{presentTenseVerbe?.length}
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
                  disabled={answered[index + questionIndex]}
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
        {showAnswers && !allAnswersCorrect && !hasNextSet && (
          <FinalScore>
            {t("Score")}: {currentScore}/{presentTenseVerbe?.length}
            <div>
              <span>{t("Choisissez le temps suivant ou")}:</span>
              <button onClick={handleRestart}>{t("Réessayer")}</button>
            </div>
          </FinalScore>
        )}
        {showSubmitButton && !submitted && (
          <SubmitButton onClick={handleSubmit}>{t("Soumettre")}</SubmitButton>
        )}
        {!submitted && !showSubmitButton && (
          <NextButton onClick={handleNext}>{t("Suivant")}</NextButton>
        )}
      </ButtonContainer>

      {submitted && (
        <div>
          {presentTenseVerbe.map((question, index) => {
            const isAnswerCorrect = answers[index] === question.correctAnswer;
            const userAnswer = answers[index];
            const correctAnswer = question.correctAnswer;
            const underscoreIndex = question.sentence.indexOf("_");
            const beforeUnderscore = question.sentence.slice(
              0,
              underscoreIndex
            );
            const afterUnderscore = question.sentence.slice(
              underscoreIndex + 5
            );

            return (
              <QuestionBox key={index}>
                {index + 1 + questionIndex}:{" "}
                <span>
                  {beforeUnderscore}
                  {question.words.map((word, wordIndex) => (
                    <WordOption
                      key={wordIndex}
                      onClick={() => handleOptionSelect(index, word)}
                      data-questioncorrectanswer={
                        question.correctAnswer === word
                      }
                      data-usersanswer={answers[index + questionIndex]}
                      data-showanswers={
                        showAnswers && answers[index + questionIndex] === word
                      }
                      data-allanswerscorrect={allAnswersCorrect}
                      disabled={answered[index + questionIndex]}
                    >
                      {word}
                    </WordOption>
                  ))}
                  {afterUnderscore}
                </span>
                {!isAnswerCorrect && (
                  <CorrectAnswer>
                    {t("Correct Answer")}: {correctAnswer}
                  </CorrectAnswer>
                )}
              </QuestionBox>
            );
          })}
        </div>
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
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:first-child {
    margin-right: 0.3rem;
    margin-left: 0.3rem;
  }
  &:last-child {
    margin-right: 0.3rem;
    margin-left: 0.3rem;
  }
  &:hover {
    transform: ${(props) => (props.disabled ? "none" : "scale(1.04)")};
    color: ${(props) => (props.disabled ? "none" : props.theme.primaryText)};
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
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;

  & div {
    margin-top: 10px;

    & span {
      font-weight: bold;
    }

    & button {
      background: ${(props) => props.theme.primaryText};
      color: ${(props) => props.theme.primaryBackground};
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
      margin-left: 10px;
    }
  }
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
const CorrectAnswer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: ${(props) => props.theme.primaryText};
  background-color: #4caf50; /* Green for correct answer */
  border-radius: 8px;
  padding: 0.2rem 0.5rem;
  margin-top: 0.3rem;
`;

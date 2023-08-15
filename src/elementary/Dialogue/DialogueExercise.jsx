import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  DialogueExerciseContainer,
  DialogueOptionButton,
  SubmitDialogue,
  ContinueButtonWrapper,
} from "../style-elementaryComponant";
import {
  SentenceBasedExerciseContainer,
  BoxContainer,
  OptionButton,
} from "./style-dialogue";
import { fetchDialoguesExercises } from "../../redux/slices/elementary/dialogueExerciseSlice";
import { measureTextWidth } from "../helpers/helpers";

const DialogueExercise = ({ Continue, lessonsCurrentIndex }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.dialogueExercises.isLoading);
  const error = useSelector((state) => state.dialogueExercises.error);
  const dialogueExercises =
    useSelector((state) => state.dialogueExercises.dialogueExercises) || [];
  console.log("dialogueExercises", dialogueExercises);
  const [answers, setAnswers] = useState(
    Array(dialogueExercises.length).fill("")
  );
  const [showAnswers, setShowAnswers] = useState(false);
  const [score, setScore] = useState(0);
  const [allAnswersCorrect, setAllAnswersCorrect] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [anyWrongAnswer, setAnyWrongAnswer] = useState(false);

  const containerRefs = useRef([]);
  const [positionPercentages, setPositionPercentages] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    dispatch(fetchDialoguesExercises(lessonsCurrentIndex));
  }, [dispatch, lessonsCurrentIndex]);

  useEffect(() => {
    resetState();
  }, [dialogueExercises]);

  useEffect(() => {
    containerRefs.current = containerRefs.current.slice(
      0,
      dialogueExercises.length
    );
  }, [dialogueExercises.length]);

  useEffect(() => {
    const newPercentages = dialogueExercises.map((question) => {
      const underscoreIndex = question.message.indexOf("_");
      const beforeUnderscoreWidth = measureTextWidth(
        question.message.slice(0, underscoreIndex)
      );
      const containerWidth = containerRefs.current[0].current.offsetWidth;
      const position = (beforeUnderscoreWidth / containerWidth) * 100 + 2;
      return position;
    });

    setPositionPercentages(newPercentages);
  }, [dialogueExercises, measureTextWidth]);

  const resetState = () => {
    setAnswers(Array(dialogueExercises.length).fill(""));
    setShowAnswers(false);
    setScore(0);
    setAllAnswersCorrect(false);
    setAnyWrongAnswer(false);
    setSubmitClicked(false);
  };

  const correctAnswers = dialogueExercises.map(
    (correct) => correct.correctAnswer
  );
  const checkAnswers = correctAnswers.join(",") === answers.join(",");

  const handleOptionSelect = (questionIndex, option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = option;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    let wrongAnswer = false;

    dialogueExercises.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        calculatedScore++;
      } else {
        wrongAnswer = true;
      }
    });

    setScore(calculatedScore);
    setShowAnswers(true);
    setAllAnswersCorrect(calculatedScore === dialogueExercises.length);
    setAnyWrongAnswer(wrongAnswer);
    setSubmitClicked(true);
  };

  return (
    <DialogueExerciseContainer>
      <h2>Choisissez la bonne réponse.</h2>
      <DialogueExerciseBox>
        {dialogueExercises.map((question, index) => {
          console.log("question", question);
          const underscoreIndex = question.message.indexOf("_");
          const beforeUnderscore = question.message.slice(0, underscoreIndex);
          const afterUnderscore = question.message.slice(underscoreIndex + 5);

          containerRefs.current[index] = containerRef;
          return (
            <div key={index} ref={containerRef}>
              <p>
                {index + 1}: {beforeUnderscore}
                <span style={{ textDecoration: "underline" }}>
                  {question.options.map((option, optionIndex) => (
                    <DialogueOptionButton
                      key={optionIndex}
                      onClick={() => handleOptionSelect(index, option)}
                      questionCorrectAnswer={question.correctAnswer === option}
                      usersAnswer={answers[index] === option}
                      showAnswers={showAnswers && answers[index] === option}
                      allAnswersCorrect={allAnswersCorrect}
                      disabled={answers[index] !== ""}
                    >
                      {option}
                    </DialogueOptionButton>
                  ))}
                </span>
                {afterUnderscore}
              </p>
            </div>
          );
        })}
      </DialogueExerciseBox>
      <ContinueButtonWrapper>
        {showAnswers ? (
          <div onClick={resetState}>
            {anyWrongAnswer ? <SubmitDialogue>Retry</SubmitDialogue> : Continue}
          </div>
        ) : (
          <div onClick={handleSubmit}>
            {checkAnswers ? (
              allAnswersCorrect ? (
                Continue
              ) : (
                <SubmitDialogue>Submit</SubmitDialogue>
              )
            ) : (
              <SubmitDialogue>Submit</SubmitDialogue>
            )}
          </div>
        )}
      </ContinueButtonWrapper>

      {checkAnswers && (
        <BoxContainer>
          <p>Score: {score}</p>
          {score === dialogueExercises.length && <p>Good job!</p>}
        </BoxContainer>
      )}
    </DialogueExerciseContainer>
  );
};

export default DialogueExercise;
const DialogueExerciseBox = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  margin: 0 2rem;
  gap: 1rem;
  margin-bottom: 1rem;
  div {
    display: flex;
    align-items: center;
    p {
      background-color: #4b9fff;
      padding: 1rem;
      color: white;
      font-size: 1.3rem;
      border-radius: 1rem;
      letter-spacing: 2px;
      min-width: 400px;
      width: 100%;
    }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    margin: 0 1rem;
    gap: 0.5rem;
    margin-bottom: 1rem;

    p {
      min-width: 350px;
      padding: 0.5rem;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    display: flex;
    margin: 0 0.5rem;
    margin-bottom: 1rem;
    min-width: 300px;

    flex-direction: column;
    div {
      p {
        width: 100%;
      }
    }
  }

  @media (min-width: 576px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin: 0 0.3rem;

    margin-bottom: 1rem;
    min-width: 300px;

    div {
      p {
        min-width: 300px;

        width: 100%;
      }
    }
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    margin: 0 0.3rem;
    margin-bottom: 1rem;
    min-width: 300px;

    div {
      min-width: 300px;

      p {
        min-width: 300px;
        width: 100%;
      }
    }
  }
`;

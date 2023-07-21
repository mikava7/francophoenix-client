import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DialogueExerciseBox,
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

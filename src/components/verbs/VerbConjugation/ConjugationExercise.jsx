import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { submitTensePercentage } from "../../../redux/slices/verbeTenses/presentTenseSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
const pronouns = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];

const ConjugationExercise = ({ frenchConjugations, tense }) => {
  const exerciseType = ConjugationExercise.name;
  const dispatch = useDispatch();
  // console.log("exerciseType", exerciseType);
  const { t } = useTranslation();
  const { verb } = useParams();

  const auth = useSelector((state) => state?.auth?.auth?.user) || {};
  const userId = auth._id;
  const [pronounInputs, setPronounInputs] = useState({});
  const [score, setScore] = useState(0);
  const [completedPairs, setCompletedPairs] = useState({});
  const [wrongAnswers, setWrongAnswers] = useState({});
  const [actualTenseScore, setActualTenseScore] = useState(0); // Initialize with 0
  // console.log("actualTenseScore", actualTenseScore);
  const handleInputChange = (pronoun, value) => {
    setPronounInputs({ ...pronounInputs, [pronoun]: value });
  };

  const restart = () => {
    setCompletedPairs({});
    setPronounInputs({});
    setWrongAnswers({});
    setScore(0);
    setActualTenseScore(0); // Reset the actualTenseScore
  };

  useEffect(() => {
    restart();
  }, [frenchConjugations]);

  const getConjugation = (pronoun) => {
    const match =
      frenchConjugations &&
      frenchConjugations?.find((item) => item.french.startsWith(pronoun));
    return match ? match.french.split(" ")[1] : "";
  };

  const handleSubmit = () => {
    let newScore = 0;
    const newCompletedPairs = {};
    const newWrongAnswers = {};

    for (const pronoun of pronouns) {
      const correctConjugation = getConjugation(pronoun);
      const userConjugation = pronounInputs[pronoun];

      if (!userConjugation) {
        newWrongAnswers[pronoun] = correctConjugation;
      } else if (userConjugation === correctConjugation) {
        newScore += 1;
        newCompletedPairs[pronoun] = userConjugation;
      } else {
        newWrongAnswers[pronoun] = correctConjugation;
      }
    }

    const newActualTenseScore = (newScore / pronouns.length) * 5; // Calculate the tense score based on the number of correct answers
    setScore(newScore);
    setCompletedPairs(newCompletedPairs);
    setWrongAnswers(newWrongAnswers);
    setActualTenseScore(newActualTenseScore);

    if (userId) {
      dispatch(
        submitTensePercentage({
          userId,
          verb,
          tense,
          exerciseType,
          tensePercentage: actualTenseScore,
        })
      );
    }
  };

  return (
    <Container>
      {t("Exercice de conjugaison")}
      {pronouns.map((p, index) => (
        <PronounContainer key={index}>
          <PronounLabel>{p}</PronounLabel>
          <Input
            type="text"
            value={pronounInputs[p] || ""}
            onChange={(e) => handleInputChange(p, e.target.value)}
            placeholder={completedPairs[p] || ""}
            isCorrect={completedPairs[p] === getConjugation(p)}
            iswrong={wrongAnswers[p]}
          />
        </PronounContainer>
      ))}

      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      <SubmitButton onClick={restart}>Restart</SubmitButton>

      <Score>{`Score: ${score.toFixed(1)} / 6`}</Score>
      <Score>{`Tense Score: ${actualTenseScore.toFixed(1)}`}</Score>
    </Container>
  );
};

export default ConjugationExercise;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PronounContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

const PronounLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  background-color: ${(props) =>
    props.isCorrect
      ? "#4caf50"
      : props.iswrong
      ? "#ff5252" // Red background for wrong answers
      : "white"};
`;

const SubmitButton = styled.button`
  font-weight: bold;
  cursor: pointer;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  color: #fff;
  transition: background-color 0.3s;
  &:hover {
    background-color: #45a049;
  }
`;

const Score = styled.div`
  font-weight: bold;
`;
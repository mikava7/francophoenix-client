import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { submitTensePercentage } from "../../../redux/slices/verbeTenses/presentTenseSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import unorm from "unorm";

const ConjugationExercise = ({ frenchConjugations, tense }) => {
  const exerciseType = ConjugationExercise.name;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { verb } = useParams();

  const auth = useSelector((state) => state?.auth?.auth?.user) || {};
  const userId = auth._id;
  const [pronounInputs, setPronounInputs] = useState({});
  const [score, setScore] = useState(0);
  const [completedPairs, setCompletedPairs] = useState({});
  const [wrongAnswers, setWrongAnswers] = useState({});
  const [actualTenseScore, setActualTenseScore] = useState(0);

  const pronouns =
    frenchConjugations &&
    frenchConjugations.map((item) => item.french.split(" ")[0]);

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

  const isCorrectConjugation = (userInput, correctConjugation) => {
    // Normalize the user input and correct conjugation to handle accents and variations
    const normalizedUserInput = normalizeString(userInput);
    const normalizedCorrectConjugation = normalizeString(correctConjugation);

    // Compare the normalized strings
    return normalizedUserInput === normalizedCorrectConjugation;
  };

  const normalizeString = (str) => {
    // Implement your string normalization logic here
    // This could involve removing accents, handling variations, etc.
    // For a basic example, you can use string replacement to remove accents:
    return unorm.nfd(str).replace(/[\u0300-\u036f]/g, "");
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
      } else if (isCorrectConjugation(userConjugation, correctConjugation)) {
        newScore += 1;
        newCompletedPairs[pronoun] = userConjugation;
      } else {
        newWrongAnswers[pronoun] = correctConjugation;
      }
    }

    const tensePercentage = (newScore / pronouns.length) * 5;
    setScore(newScore);
    setCompletedPairs(newCompletedPairs);
    setWrongAnswers(newWrongAnswers);
    setActualTenseScore(tensePercentage);

    if (userId) {
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
  };

  return (
    <Container>
      <h3>{tense}</h3>
      <p>{t("Exercice de conjugaison")}</p>
      {t("Remplissez avec les formulaires de conjugaison corrects")}
      {pronouns.map((p, index) => (
        <PronounContainer key={index}>
          <PronounLabel>{p}</PronounLabel>
          <VariationsContainer>
            <Input
              type="text"
              value={pronounInputs[p] || ""}
              onChange={(e) => handleInputChange(p, e.target.value)}
              placeholder={completedPairs[p] || ""}
              isCorrect={completedPairs[p] === getConjugation(p)}
              isWrong={wrongAnswers[p]}
            />
            {wrongAnswers[p] && (
              <CorrectVariation>
                {" "}
                {t("Bonne réponse")}: {getConjugation(p)}
              </CorrectVariation>
            )}
          </VariationsContainer>
        </PronounContainer>
      ))}

      <ButtonContainer>
        <SubmitButton onClick={restart}>{t("Recommencer")}</SubmitButton>
        <SubmitButton onClick={handleSubmit}>{t("Soumettre")}</SubmitButton>
      </ButtonContainer>
      <Score>{`${t("Score")}: ${score.toFixed()} / 6`}</Score>
    </Container>
  );
};

export default ConjugationExercise;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: auto;
`;

const PronounContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  position: relative;
  outline: 1px solid red;
  padding: 0.5rem;
  height: 3.5rem;
  background: ${(props) => props.theme.secondaryBackground};
  width: 270px;
`;

const PronounLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 0 auto;

  background-color: ${(props) =>
    props.isCorrect ? "#4caf50" : props.isWrong ? "#ff5252" : "white"};
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

const ButtonContainer = styled.div`
  display: flex;
`;

const VariationsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CorrectVariation = styled.span`
  width: 100%;
  /* position: absolute;
  bottom: 50%;
  right: 50%;
  transform: translate(-50%, -50%); */

  margin-left: 2rem;
  color: #4caf50;
`;

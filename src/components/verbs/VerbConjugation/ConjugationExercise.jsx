import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { shuffleArray } from "../../Utility/utils";

const conjugationPairs = [
  { pronoun: "je", conjugation: "suis" },
  { pronoun: "tu", conjugation: "es" },
  { pronoun: "il/elle", conjugation: "est" },
  { pronoun: "nous", conjugation: "sommes" },
  { pronoun: "vous", conjugation: "êtes" },
  { pronoun: "ils/elles", conjugation: "sont" },
];

const ConjugationExercise = ({ frenchConjugations }) => {
  const [pronounInputs, setPronounInputs] = useState({});
  const [selectedConjugation, setSelectedConjugation] = useState("");
  const [score, setScore] = useState(0);
  const [completedPairs, setCompletedPairs] = useState({});

  const pronouns = conjugationPairs.map((pair) => pair.pronoun);
  const conjugations = conjugationPairs.map((pair) => pair.conjugation);

  const handleInputChange = (pronoun, value) => {
    setPronounInputs({ ...pronounInputs, [pronoun]: value });
  };

  const handleSubmit = () => {
    let newScore = 0;
    const newCompletedPairs = {};

    for (const pronoun of pronouns) {
      const correctConjugation = conjugationPairs.find(
        (pair) => pair.pronoun === pronoun
      ).conjugation;
      const userConjugation = pronounInputs[pronoun];

      if (!userConjugation) {
        newScore -= 1; // User skipped input
      } else if (userConjugation === correctConjugation) {
        newScore += 1; // User's input is correct
        newCompletedPairs[pronoun] = userConjugation;
      } else {
        newCompletedPairs[pronoun] = correctConjugation;
      }
    }

    setScore(newScore);
    setCompletedPairs(newCompletedPairs);
    setSelectedConjugation(""); // Clear selected conjugation
  };

  useEffect(() => {
    shuffleArray(conjugations);
  }, []);

  return (
    <Container>
      {pronouns.map((pronoun, index) => (
        <PronounContainer key={index}>
          <PronounLabel>{pronoun}</PronounLabel>
          <Input
            type="text"
            value={pronounInputs[pronoun] || ""}
            onChange={(e) => handleInputChange(pronoun, e.target.value)}
            placeholder={completedPairs[pronoun] || ""}
            isCorrect={completedPairs[pronoun] === pronounInputs[pronoun]}
          />
        </PronounContainer>
      ))}
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      <Score>{`Score: ${score} / 6`}</Score>
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
    props.isCorrect ? "#4caf50" : props.isCorrect === false ? "" : "white"};
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

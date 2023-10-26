import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { shuffleArray } from "../../Utility/utils";

const conjugationPairs = {
  je: "suis",
  tu: "es",
  il: "est",
  elle: "est",
  nous: "sommes",
  vous: "êtes",
  ils: "sont",
  elles: "sont",
};

const ConjugationExercise = () => {
  const [selectedPronoun, setSelectedPronoun] = useState("");
  const [selectedConjugation, setSelectedConjugation] = useState("");
  const [score, setScore] = useState(8); // Initialize score to 8

  const handleSelectPronoun = (pronoun) => {
    setSelectedPronoun(pronoun);
  };

  const handleSelectConjugation = (conjugation) => {
    setSelectedConjugation(conjugation);
    const isCorrect = conjugationPairs[selectedPronoun] === conjugation;
    if (isCorrect) {
      // If the pair is correct, decrement the score
      setScore(score - 1);
    }
  };

  const pronouns = Object.keys(conjugationPairs);
  const conjugations = Object.values(conjugationPairs);

  useEffect(() => {
    shuffleArray(conjugations);
    shuffleArray(pronouns);
  }, []);

  return (
    <Container>
      <Column>
        {pronouns.map((pronoun, index) => (
          <Pronoun
            key={index}
            selected={selectedPronoun === pronoun}
            selectedPronoun={selectedPronoun}
            onClick={() => handleSelectPronoun(pronoun)}
          >
            {pronoun}
          </Pronoun>
        ))}
      </Column>
      <Column>
        {conjugations.map((conjugation, index) => (
          <Conjugation
            key={index}
            selected={selectedConjugation === conjugation}
            selectedPronoun={selectedPronoun}
            onClick={() => handleSelectConjugation(conjugation)}
          >
            {conjugation}
          </Conjugation>
        ))}
      </Column>
      <Score>{`Score: ${score}`}</Score>
    </Container>
  );
};

export default ConjugationExercise;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Pronoun = styled.div`
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? "orange" : props.selectedPronoun === "" ? "" : "red"};
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #4caf50;
  }
`;

const Conjugation = styled.div`
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? "orange" : props.selectedPronoun === "" ? "" : "red"};
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #4caf50;
  }
`;
const Score = styled.div`
  font-weight: bold;
`;

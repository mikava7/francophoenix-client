import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
  const [shuffledPairs, setShuffledPairs] = useState([]);
  const [selectedPairs, setSelectedPairs] = useState({});

  useEffect(() => {
    shufflePairs();
  }, []);

  const shufflePairs = () => {
    const shuffled = Object.entries(conjugationPairs).sort(
      () => Math.random() - 0.5
    );
    setShuffledPairs(shuffled);
  };

  const handleSelect = (pronoun, conjugation) => {
    const newSelectedPairs = { ...selectedPairs };

    if (newSelectedPairs[pronoun] === conjugation) {
      delete newSelectedPairs[pronoun];
    } else {
      newSelectedPairs[pronoun] = conjugation;
    }

    setSelectedPairs(newSelectedPairs);
  };

  const isPairSelected = (pronoun, conjugation) => {
    return selectedPairs[pronoun] === conjugation;
  };

  return (
    <Container>
      <Column>
        {shuffledPairs.map(([pronoun, conjugation], index) => (
          <Pronoun
            key={index}
            onClick={() => handleSelect(pronoun, conjugation)}
            selected={isPairSelected(pronoun, conjugation)}
          >
            {pronoun}
          </Pronoun>
        ))}
      </Column>
      <Column>
        {shuffledPairs.map(([pronoun, conjugation], index) => (
          <Conjugation
            key={index}
            onClick={() => handleSelect(pronoun, conjugation)}
            selected={isPairSelected(pronoun, conjugation)}
          >
            {conjugation}
          </Conjugation>
        ))}
      </Column>
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
  background-color: ${(props) => (props.selected ? "#4CAF50" : "#f9f9f9")};
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
  background-color: ${(props) => (props.selected ? "#4CAF50" : "#f9f9f9")};
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #4caf50;
  }
`;

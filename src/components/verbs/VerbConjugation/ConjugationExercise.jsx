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
  const [selectedPair, setSelectedPair] = useState(null);

  useEffect(() => {
    shufflePairs();
  }, []);

  const shufflePairs = () => {
    const shuffled = Object.entries(conjugationPairs)
      .map(([pronoun, conjugation]) => ({ pronoun, conjugation }))
      .sort(() => Math.random() - 0.5);
    setShuffledPairs(shuffled);
  };

  const handleSelect = (pair) => {
    if (!selectedPair) {
      setSelectedPair(pair);
    } else if (pair.pronoun !== selectedPair.pronoun) {
      // If the selected pairs don't have the same subject pronoun
      // Check if the conjugations match
      if (pair.conjugation === selectedPair.conjugation) {
        alert("Correct!"); // You can replace this with your own UI logic
      } else {
        alert("Incorrect!"); // You can replace this with your own UI logic
      }
      setSelectedPair(null);
    }
  };

  return (
    <Container>
      {shuffledPairs.map((pair, index) => (
        <Pair
          key={index}
          onClick={() => handleSelect(pair)}
          selected={selectedPair && selectedPair.pronoun === pair.pronoun}
        >
          <Pronoun>{pair.pronoun}</Pronoun>
          <Conjugation>{pair.conjugation}</Conjugation>
        </Pair>
      ))}
    </Container>
  );
};

export default ConjugationExercise;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Pair = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.selected ? "#4CAF50" : "#f9f9f9")};
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4caf50;
  }
`;

const Pronoun = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const Conjugation = styled.div`
  font-weight: bold;
`;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { shuffleArray } from "../../Utility/utils";

const conjugationPairs = [
  { pronoun: "je", conjugation: "suis" },
  { pronoun: "tu", conjugation: "es" },
  { pronoun: "il", conjugation: "est" },
  { pronoun: "elle", conjugation: "est" },
  { pronoun: "nous", conjugation: "sommes" },
  { pronoun: "vous", conjugation: "êtes" },
  { pronoun: "ils", conjugation: "sont" },
  { pronoun: "elles", conjugation: "sont" },
];

const ConjugationExercise = () => {
  const [selectedPronoun, setSelectedPronoun] = useState("");
  const [selectedConjugation, setSelectedConjugation] = useState("");
  const [isCorrect, setIsCorect] = useState(false);
  const [score, setScore] = useState(8);
  const [selectedPair, setSelectedPair] = useState({
    pronoun: "",
    conjugation: "",
  });
  const [completedPairs, setCompletedPairs] = useState([]);
  console.log({ selectedPronoun, selectedConjugation, selectedPair });
  console.log("completedPairs", completedPairs);

  const pronouns = conjugationPairs.map((pair) => pair.pronoun);
  const conjugations = conjugationPairs.map((pair) => pair.conjugation);

  const handleSelect = (pronoun, conjugation) => {
    if (selectedPronoun === pronoun && selectedConjugation === conjugation) {
      // The same pair has been selected again; do nothing
      return;
    }

    setSelectedPronoun(pronoun);
    setSelectedConjugation(conjugation);
    setSelectedPair({ pronoun, conjugation });

    if (isPairCorrect(pronoun, conjugation)) {
      setIsCorect(true);
      setSelectedPronoun("");
      setSelectedConjugation("");
      setCompletedPairs([...completedPairs, { pronoun, conjugation }]);
    } else {
      setScore(score - 1);
      setIsCorect(false);
    }
  };

  const isPairCorrect = (pronoun, conjugation) => {
    return conjugationPairs.some(
      (pair) => pair.pronoun === pronoun && pair.conjugation === conjugation
    );
  };

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
            onClick={() => handleSelect(pronoun, selectedConjugation)}
            isCorrect={completedPairs.some((pair) => pair.pronoun === pronoun)}
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
            onClick={() => handleSelect(selectedPronoun, conjugation)}
            isCorrect={completedPairs.some(
              (pair) => pair.conjugation === conjugation
            )}
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
  background-color: ${(props) => (props.selected ? "orange" : "")};
  background-color: ${(props) =>
    props.isCorrect ? props.theme.correctBack : ""};
  color: ${(props) => (props.isCorrect ? props.theme.primaryText : "")};

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
  background-color: ${(props) => {
    console.log(props.isCorrect);
    props.isCorrect ? "green" : "";
  }};
  background-color: ${(props) => (props.selected ? "orange" : "")};
  background-color: ${(props) =>
    props.isCorrect ? props.theme.correctBack : ""};
  color: ${(props) => (props.isCorrect ? props.theme.primaryText : "")};

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

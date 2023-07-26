import React, { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../../../Styles/globalStyles";

const ExerciseArticle = ({ frenchWords }) => {
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});

  const isWordCorrect = (selectedOption, word) => {
    const startsWithLa = word.toLowerCase().startsWith("la ");
    const startsWithLe = word.toLowerCase().startsWith("le ");
    const startsWithL = word.toLowerCase().startsWith("l’");

    if (startsWithLa && selectedOption === "la") {
      return true;
    }

    if (startsWithLe && selectedOption === "le") {
      return true;
    }

    if (startsWithL) {
      if (word.includes("(m.)")) {
        // For words with (m.), assume "l' (le)" is correct
        return selectedOption === "le";
      }
      if (word.includes("(f.)")) {
        // For words with (f.), assume "l' (la)" is correct
        return selectedOption === "la";
      }
    }

    return false;
  };

  const handleOptionSelect = (word, option) => {
    if (selectedOptions[word]) {
      // User already made a selection for this word, do not allow changing the option
      return;
    }
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [word]: option,
    }));

    const isCorrect = isWordCorrect(option, word);
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const displayWord = (word) => {
    if (word.startsWith("l’")) {
      // Remove gender information enclosed in parentheses
      return word
        .slice(2)
        .replace(/\([^()]*\)/, "")
        .trim("(");
    } else if (word.startsWith("les ")) {
      // For plural words starting with "les ", slice the first four characters ("les ")
      return word.slice(4);
    } else {
      // For regular words starting with "le " or "la ", slice the first three characters
      return word.slice(3);
    }
  };

  const areAllCorrect = () => {
    return frenchWords.every((word) =>
      isWordCorrect(selectedOptions[word], word)
    );
  };

  const restartExercise = () => {
    setSelectedOptions({});
    setScore(0);
  };

  return (
    <Container>
      <h2>French Vocabulary Exercise</h2>
      <div>
        {frenchWords.map((word, index) => (
          <WordPair key={index}>
            <WordText>{displayWord(word)}</WordText>
            <OptionsContainer>
              {word.startsWith("la ") && (
                <>
                  <Option
                    onClick={() => handleOptionSelect(word, "le")}
                    isSelected={selectedOptions[word] === "le"}
                    isCorrect={isWordCorrect("le", word)}
                  >
                    le
                  </Option>
                  <Option
                    onClick={() => handleOptionSelect(word, "la")}
                    isSelected={selectedOptions[word] === "la"}
                    isCorrect={isWordCorrect("la", word)}
                  >
                    la
                  </Option>
                </>
              )}
              {word.startsWith("l’") && (
                <>
                  <Option
                    onClick={() => handleOptionSelect(word, "le")}
                    isSelected={selectedOptions[word] === "le"}
                    isCorrect={isWordCorrect("le", word)}
                  >
                    le
                  </Option>
                  <Option
                    onClick={() => handleOptionSelect(word, "la")}
                    isSelected={selectedOptions[word] === "la"}
                    isCorrect={isWordCorrect("la", word)}
                  >
                    la
                  </Option>
                </>
              )}
              {word.startsWith("le") && (
                <>
                  <Option
                    onClick={() => handleOptionSelect(word, "le")}
                    isSelected={selectedOptions[word] === "le"}
                    isCorrect={isWordCorrect("le", word)}
                  >
                    le
                  </Option>
                  <Option
                    onClick={() => handleOptionSelect(word, "la")}
                    isSelected={selectedOptions[word] === "la"}
                    isCorrect={isWordCorrect("la", word)}
                  >
                    la
                  </Option>
                </>
              )}
            </OptionsContainer>
          </WordPair>
        ))}
      </div>

      {areAllCorrect() ? (
        <Finish>Finish</Finish>
      ) : (
        <Score>
          Score: {score}/{frenchWords.length}
        </Score>
      )}

      <StyledButton onClick={restartExercise}>Restart</StyledButton>
    </Container>
  );
};

export default ExerciseArticle;

const Container = styled.div`
  margin: 0 auto;
  padding: 0.5rem 1rem;
  min-width: 350px;
  width: 100%;
`;
const WordPair = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;

  padding: 0 1rem;
  margin: 1rem;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.text2};
  gap: 1rem;
  border-radius: 6px;
  font-size: 1.4rem;
`;

const WordText = styled.div`
  margin-right: 1rem;
  padding: 0.5rem 1rem;

  width: 70%;
`;

const OptionsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 3rem;
  width: 30%;
`;
const Option = styled.div`
  padding: 0.5rem 1rem;

  background-color: ${(props) =>
    props.isSelected ? (props.isCorrect ? "green" : "red") : "transparent"};
  color: ${(props) =>
    props.isSelected ? (props.isCorrect ? "white" : "black") : ""};
  margin: 0 0.5rem;
  border-radius: 6px;
  border: 2px solid green;
  cursor: ${(props) => (props.isSelected ? "default" : "pointer")};
  pointer-events: ${(props) => (props.isSelected ? "none" : "auto")};

  &:hover {
    ${(props) =>
      !props.isSelected &&
      `
      background-color: blueviolet;
      color: ${props.theme.colors.text2};
    `}
  }
`;

const Score = styled.div`
  margin-top: 1rem;
`;

const Finish = styled.div`
  margin-top: 1rem;
  font-weight: bold;
  color: green;
`;

import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
const ExerciseArticle = ({ frenchWords }) => {
  console.log("frenchWords in ExerciseArticle", frenchWords);
  const { t } = useTranslation();
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
    <ExerciseArticleContainer>
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

      <ExerciseArticleContainerApendix>
        <Score>
          {t("Score")}: {score}/{frenchWords.length}
        </Score>

        <RestartButton onClick={restartExercise}>
          {" "}
          {t("Recommencer")}
        </RestartButton>
      </ExerciseArticleContainerApendix>
    </ExerciseArticleContainer>
  );
};

export default ExerciseArticle;

const ExerciseArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const WordPair = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding: 0 1rem;
  margin: 1rem;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  gap: 1rem;
  border-radius: 6px;
  font-size: 1.4rem;
  max-width: 100%;
`;
const WordText = styled.div`
  margin-right: 1rem;
  padding: 0.5rem 1rem;

  width: 70%;
  max-width: 100%;
`;
const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
const Option = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${(props) =>
    props.isSelected ? (props.isCorrect ? "green" : "#EF3340") : "transparent"};
  color: ${(props) =>
    props.isSelected ? (props.isCorrect ? "white" : "black") : ""};
  margin: 0 0.5rem;
  border-radius: 6px;
  border: 2px solid #0055a4;
  cursor: ${(props) => (props.isSelected ? "default" : "pointer")};
  pointer-events: ${(props) => (props.isSelected ? "none" : "auto")};
  max-width: 100%;

  &:hover {
    ${(props) =>
      !props.isSelected &&
      `
      background-color: #0055A4;
      color: ${props.theme.background};
    `}
  }
`;
const ExerciseArticleContainerApendix = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Score = styled.div`
  margin: 1rem;
  /* margin-right: 2rem; */
  margin-left: auto;
  font-size: 1.2rem;

  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  box-shadow: 0px 2px 4px #0055a4;
`;
const RestartButton = styled.button`
  padding: 1rem;
  text-align: center;
  width: 12rem;
  font-size: 1.2rem;
  background-color: #0055a4;
  color: #ffffff;
  cursor: pointer;
  border: 2px solid #0055a4;
  border-radius: 6px;

  &:hover {
    background-color: #ffffff;
    color: #0055a4;
  }
`;

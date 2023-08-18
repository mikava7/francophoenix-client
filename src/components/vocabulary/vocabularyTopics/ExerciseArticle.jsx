import { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTopicNames,
  fetchQuizData,
} from "../../../redux/slices/quizPictures/quizPictures";
import { useTranslation } from "react-i18next";
import CategoryDropdown from "../../quizPictures/CategoryDropdown";
import Loading from "../../loading/Loading";

const ExerciseArticle = ({ frenchWords }) => {
  const dispatch = useDispatch();
  const topicNames = useSelector((state) => state.quizData.topicNames) || [];
  const quizData = useSelector((state) => state.quizData.currentTopic) || [];
  // console.log("quizData", quizData);
  const isLoading = useSelector((state) => state.quizData.isLoading);
  const topic = topicNames.map((topic) => topic.topic);
  const ownFrenchWords = quizData.map((topic) => topic.french);

  const [topicIndex, setTopicIndex] = useState(0);
  // const [bothGenderWords, setBothGenderWords] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(topic[0]);
  const [currentQuestionSet, setCurrentQuestionSet] = useState([]);
  const handleCategoryChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    const selectedCategoryIndex = topic.indexOf(selectedCategory);
    setTopicIndex(selectedCategoryIndex);
    setScore(0);
  };

  useEffect(() => {
    dispatch(fetchTopicNames());
  }, []);

  useEffect(() => {
    if (topicNames.length > 0) {
      const selectedCategoryIndex = topicNames.findIndex(
        (topic) => topic.topic === selectedCategory
      );
      setTopicIndex(selectedCategoryIndex);

      const id = topicNames[selectedCategoryIndex]._id;
      dispatch(fetchQuizData(id));
    }
  }, [topicNames, selectedCategory]);

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
    if (word.startsWith("l'")) {
      return word
        .slice(2)
        .replace(/\([^()]*\)/, "")
        .trim("(");
    } else if (word.startsWith("les ")) {
      // For plural words starting with "les ", slice the first four characters ("les ")
      return word.slice(4);
    } else if (word.startsWith("le/la ")) {
      return null; // Return null to exclude this word from rendering
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

  const wordsToRender = frenchWords ? frenchWords : ownFrenchWords;
  const bothGenderWords = wordsToRender.filter((word) =>
    word.startsWith("le/la ")
  );
  // console.log("bothGenderWords", bothGenderWords);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <ExerciseArticleContainer>
      {!frenchWords && (
        <ExerciseArticleTopPart>
          <CategoryDropdown
            topic={topic}
            onCategoryChange={handleCategoryChange}
          />

          <div>
            <h2>Words with Both Gender</h2>
            {bothGenderWords.map((word, index) => (
              <ul key={index}>
                <li>{word}</li>
              </ul>
            ))}
          </div>
        </ExerciseArticleTopPart>
      )}

      <ExerciseArticleBottomPart>
        {/* {console.log("wordsToRender", wordsToRender)} */}
        {wordsToRender.map((word, index) => {
          const displayedWord = displayWord(word);

          if (displayedWord !== null) {
            return (
              <WordPair key={index}>
                <WordText>{displayedWord}</WordText>
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
                  {word.startsWith("l'") && (
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
            );
          } else {
            return null; // Exclude the entire WordPair structure
          }
        })}
      </ExerciseArticleBottomPart>

      <ExerciseArticleContainerApendix>
        <Score>
          {t("Score")}: {score}
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
  align-items: center;
`;
const ExerciseArticleTopPart = styled.div`
  background: #ecf8ff;
  padding: 1rem;
  /* width: 100%; */

  ul {
    list-style: none;
    li {
      font-size: 1.2rem;
    }
  }
`;
const ExerciseArticleBottomPart = styled.div`
  /* border: 2px solid black; */
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
  border: 2px solid gainsboro;

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

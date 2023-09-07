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
import { displayWord } from "../../Utility/utils";
import { Button, FlexContainer } from "../../../Styles/globalStyles";
import useScrollToTopOnRouteChange from "../../../hooks/useScrollToTopOnRouteChange";
const ExerciseArticle = ({ frenchWords }) => {
  useScrollToTopOnRouteChange();

  const dispatch = useDispatch();
  const topicNames = useSelector((state) => state.quizData.topicNames) || [];
  const quizData =
    useSelector((state) => state.quizData.currentTopic.words) || [];
  // console.log("frenchWords in ExerciseArticle", frenchWords);
  const isLoading = useSelector((state) => state.quizData.isLoading);
  const topic = topicNames.map((topic) => topic.topic);

  const ownFrenchWords = quizData.map((words) => words.french);

  const [topicIndex, setTopicIndex] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState(topic[0]);
  const [currentQuestionSet, setCurrentQuestionSet] = useState([]);
  const handleCategoryChange = (selectedCategory) => {
    const newSelectedCategory = event.target.value;
    setSelectedCategory(newSelectedCategory);
    const selectedCategoryIndex = topic.indexOf(newSelectedCategory);
    setTopicIndex(selectedCategoryIndex);

    setScore(0);
    setCurrentWordIndex(0);
    setQuizStarted(true);
  };

  useEffect(() => {
    if (!frenchWords) {
      dispatch(fetchTopicNames());
    }
  }, [frenchWords]); // Only fetch topic names if not used as part of a parent component

  useEffect(() => {
    if (!frenchWords && topicNames.length > 0 && selectedCategory) {
      const selectedCategoryIndex = topicNames.findIndex(
        (topic) => topic.topic === selectedCategory
      );
      if (selectedCategoryIndex !== -1) {
        setTopicIndex(selectedCategoryIndex);
        const id = topicNames[selectedCategoryIndex]._id;
        dispatch(fetchQuizData(id));
      }
    }
  }, [frenchWords, topicNames, selectedCategory]); // Only fetch quiz data if not used as part of a parent component

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
  // const displayWord = (word) => {
  //   if (word.startsWith("l'")) {
  //     return word
  //       .slice(2)
  //       .replace(/\([^()]*\)/, "")
  //       .trim("(");
  //   } else if (word.startsWith("les ")) {
  //     // For plural words starting with "les ", slice the first four characters ("les ")
  //     return word.slice(4);
  //   } else if (word.startsWith("le/la ")) {
  //     return null; // Return null to exclude this word from rendering
  //   } else {
  //     // For regular words starting with "le " or "la ", slice the first three characters
  //     return word.slice(3);
  //   }
  // };

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
      <BothGenderWordsContainer>
        <h2>{t("Les noms à double genre")}</h2>
        {bothGenderWords.map((word, index) => (
          <ul key={index}>
            <li>{word}</li>
          </ul>
        ))}
      </BothGenderWordsContainer>
      {!frenchWords && (
        <ExerciseArticleTopPart>
          {/* {console.log("selectedCategory", selectedCategory)} */}
          <CategoryDropdown
            topic={topic}
            onCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
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
                <OptionsContainer key={index}>
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
  max-width: 100%;
  /* outline: 2px solid red; */
  background-color: ${(props) => props.theme.primaryBackground};
  @media (min-width: 577px) and (max-width: 767px) {
    width: 95%;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    max-width: 94%;
  }
  /* width: 100%; */
  @media (max-width: 392px) {
    max-width: 96%;
    /* margin-right: auto; */
  }
`;
const ExerciseArticleTopPart = styled.div`
  padding: 1rem;
  max-width: 100%;

  ul {
    list-style: none;
    li {
      font-size: 1.4rem;
    }
  }
`;
const ExerciseArticleBottomPart = styled.div`
  /* border: 2px solid black; */
`;
const WordPair = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.2rem;
  padding: 0 0.4rem;
  margin: 1rem;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.secondaryBackground};
  outline: 2px solid ${(props) => props.theme.secondaryText};

  gap: 1rem;
  border-radius: 6px;

  max-width: 100%;
  @media (min-width: 577px) and (max-width: 767px) {
    width: 95%;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    width: 90%;
  }
  /* width: 100%; */
  @media (max-width: 392px) {
    padding: 0;

    width: 93%;
    /* margin-right: auto; */
  }
`;
const WordText = styled.div`
  margin-right: 1rem;
  padding: 0.5rem 1rem;

  /* width: 70%; */
  max-width: 100%;
`;
const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;

  gap: 1rem;
  @media (min-width: 577px) and (max-width: 767px) {
    gap: 0.8rem;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    gap: 0.3rem;
  }
  @media (max-width: 392px) {
    gap: 0.3rem;
  }
`;
const Option = styled.div`
  padding: 0.3rem 0.8rem;
  background-color: ${(props) =>
    props.isSelected
      ? props.isCorrect
        ? props.theme.correctBack
        : props.theme.wrongback
      : props.theme.primaryBackground};
  color: ${(props) =>
    props.isSelected
      ? props.isCorrect
        ? props.theme.wrongback
        : "black"
      : ""};
  margin: 0 0.5rem;
  border-radius: 4px;
  outline: 2px solid ${(props) => props.theme.secondaryText};
  cursor: ${(props) => (props.isSelected ? "default" : "pointer")};
  pointer-events: ${(props) => (props.isSelected ? "none" : "auto")};
  max-width: 100%;

  &:hover {
    ${(props) =>
      !props.isSelected &&
      `
      background-color: ${props.theme.highlight3};
      color: ${props.theme.primaryText};
    `}
  }
  @media (max-width: 392px) {
    padding: 0.2rem 0.6rem;
  }
`;
const ExerciseArticleContainerApendix = styled.div`
  display: flex;

  align-items: center;
`;
const Score = styled.div`
  margin: 0.4rem;
  /* margin-right: 2rem; */
  margin-left: auto;
  font-size: 1rem;

  color: ${(props) => props.theme.primaryText};
  background-color: ${(props) => props.theme.secondaryBackground};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  /* box-shadow: 0px 2px 4px #0055a4; */
`;
const RestartButton = styled(Button)`
  width: auto;

  @media (max-width: 576px) {
    font-size: 1.2rem;
    margin: 0;
    padding: 0.1 0.2rem;
  }
`;
const BothGenderWordsContainer = styled(FlexContainer)`
  background-color: ${(props) => props.theme.secondaryBackground};
  width: 100%;

  ul {
    li {
      list-style: none;
      font-size: 1.2rem;
    }
  }
`;

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
import QuizModal from "./modal/QuizModal";
import { BackgroundOverlay } from "../vocabularyStyles/styles";

const ExerciseArticle = ({ frenchWords }) => {
  // console.log("frenchWords", frenchWords);
  useScrollToTopOnRouteChange();
  const [showModal, setShowModal] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const [incorrectlyAnsweredQuestions, setIncorrectlyAnsweredQuestions] =
    useState([]);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [topicIndex, setTopicIndex] = useState(0);

  // const [currentQuestionSet, setCurrentQuestionSet] = useState([]);

  const dispatch = useDispatch();
  const topicNames = useSelector((state) => state.quizData.topicNames) || [];
  const quizData =
    useSelector((state) => state.quizData.currentTopic.words) || [];
  // console.log("frenchWords in ExerciseArticle", frenchWords);
  const isLoading = useSelector((state) => state.quizData.isLoading);
  const topic = topicNames.map((topic) => topic.topic);
  const [selectedCategory, setSelectedCategory] = useState(topic[0]);

  const ownFrenchWords = quizData.map((words) => words.french);

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

  const isWordCorrect = (selectedOption, word) => {
    const startsWithLa = word.toLowerCase().startsWith("la ");
    const startsWithLe = word.toLowerCase().startsWith("le ");
    const startsWithL = word.toLowerCase().startsWith("l'");
    // console.log("startsWithL", startsWithL);
    if (startsWithLa && selectedOption === "la") {
      return true;
    }

    if (startsWithLe && selectedOption === "le") {
      return true;
    }

    if (startsWithL) {
      if (word.includes("(m.)")) {
        // For words with (m.)
        return selectedOption === "le";
      }
      if (word.includes("(f.)")) {
        // For words with (f.)
        return selectedOption === "la";
      }
    }

    return false;
  };

  const handleOptionSelect = (word, option) => {
    if (selectedOptions[word]) {
      return;
    }
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [word]: option,
    }));
    // console.log(selectedOptions, selectedOptions);
    const isCorrect = isWordCorrect(option, word);
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    } else {
      // Add the incorrectly answered question to the array
      setIncorrectlyAnsweredQuestions((prevIncorrect) => [
        ...prevIncorrect,
        { question: word, answer: option }, // You might need to adjust this structure based on your data
      ]);
    }
  };

  const restartExercise = () => {
    setSelectedAnswers({});
    setSelectedOptions({});
    setScore(0);
    setIncorrectlyAnsweredQuestions([]);

    // Calculate the index of the first question
    const firstQuestionIndex = 0;

    // Get the first question element by ID
    const firstQuestion = document.getElementById(
      `question-${firstQuestionIndex}`
    );

    if (firstQuestion) {
      // Calculate the scroll position, considering the navbar height
      const navbarHeight = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--navbar-height"
        )
      );
      // console.log("navbarHeight", navbarHeight);
      const scrollPosition =
        firstQuestion.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      // Scroll to the first question, aligning it at the top of the viewport
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const wordsToRender = frenchWords ? frenchWords : ownFrenchWords;

  const bothGenderWords = wordsToRender
    .filter((word) => word.startsWith("le/la ") || word.includes("(m./f.)"))
    .map((word) => {
      // Remove "(m./f.)" if it's present
      return word
        .replace(/\(m\.\/f\.\)/, "")
        .replace(/le\/la /, "")
        .trim();
    });
  // console.log("bothGenderWords", bothGenderWords);

  const filterWords = (wordsToRender) => {
    return wordsToRender.filter((word) => {
      const includesMF = word.includes("(m./f.)");
      const startsWithLes = word.toLowerCase().startsWith("les ");
      const startsWithLeLa = word.toLowerCase().startsWith("le/la");
      return !startsWithLes && !includesMF && !startsWithLeLa;
    });
  };
  const isAllCorrect = wordsToRender.every((quizItem, questionIndex) => {
    const selectedOptionIndex = setSelectedOptions[questionIndex];
    return (
      selectedOptionIndex !== undefined &&
      quizItem.options[selectedOptionIndex] === quizItem.answer
    );
  });

  const filteredWords = filterWords(wordsToRender);

  const maxScore = filteredWords.length;
  const isQuizFinished = Object.keys(selectedOptions).length === maxScore;

  useEffect(() => {
    if (isQuizFinished) {
      setShowModal(true);
    }
  }, [isQuizFinished]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <ExerciseArticleContainer>
      <BothGenderWordsContainer>
        <h2>{t("Les noms à double genre")}</h2>
        <ul>
          {bothGenderWords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
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
        {filteredWords.map((word, index) => {
          const displayedWord = displayWord(word);

          if (displayedWord !== null) {
            return (
              <WordPair key={index} id={`question-${index}`}>
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
                        {/* Add this line */}
                      </Option>
                    </>
                  )}
                  {/* Add this line */}
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
      {showModal && (
        <>
          <BackgroundOverlay />

          <QuizModal
            onClose={() => setShowModal(false)}
            isQuizFinished={isQuizFinished}
            isAllCorrect={isAllCorrect}
            incorrectlyAnsweredQuestions={incorrectlyAnsweredQuestions}
            Restart={
              <RestartButton onClick={restartExercise}>
                {t("Recommencer")}
              </RestartButton>
            }
          />
        </>
      )}{" "}
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
        ? props.theme.primaryText
        : props.theme.primaryBackground
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
const BothGenderWordsContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryBackground};
  width: 100%;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: flex;
    /* flex-direction: row; */
    flex-wrap: wrap;
    /* outline: 1px solid red; */
    gap: 1rem;

    li {
      font-size: 1.2rem;
      margin: 0;
      background-color: ${(props) => props.theme.primaryBackground};
      border-radius: 4px;
      padding: 0.5rem;
      outline: 1px solid ${(props) => props.theme.highlight4};
      margin-left: 1rem;
      margin-bottom: 1rem;
    }
  }
`;

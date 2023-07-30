import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchVocabularyTopics } from "../../../redux/slices/vocabularyTopics/vocabularyTopicSlice";
import styled from "styled-components";
import VocabularyQuiz from "./VocabularyQuiz";
import ExerciseArticle from "./ExerciseArticle";
import VocabularyAccordion from "./vocabularyAccordion/VocabularyAccordion";
import ChevronDown from "../../../../public/icons/chevron-down-24.png";
import RotatingChevron from "../../Utility/RotatingChevron";
const Vocabulary = () => {
  const [showArticle, setShowArticle] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [rotationArticle, setRotationArticle] = useState(0);
  const [rotationQuiz, setRotationQuiz] = useState(0);

  const toggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  const handleArticleToggle = () => {
    setShowArticle(!showArticle);
    setRotationArticle((prevRotation) => prevRotation + 180);
  };

  const handleQuizToggle = () => {
    setRotationQuiz((prevRotation) => prevRotation + 180);
    setShowQuiz(!showQuiz);
  };
  const { vocabularyTopicId } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.vocabularyTopics.isLoading);
  const topics =
    useSelector((state) => state.vocabularyTopics.vocabularyTopics) || [];

  const selectedTopic = topics.find((topic) => topic._id === vocabularyTopicId);

  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";

  useEffect(() => {
    dispatch(fetchVocabularyTopics());
  }, [dispatch, vocabularyTopicId]);

  if (isLoading) {
    return <p>Loading</p>;
  }

  // Check if selectedTopic is defined before proceeding
  if (!selectedTopic) {
    return <p>No data found.</p>;
  }

  // Destructure the selected topic data with optional chaining
  const {
    french,
    english,
    georgian,
    nameFr,
    nameGeo,
    nameEng,
    frenchExamples,
    englishExamples,
    georgianExamples,
  } = selectedTopic;

  // Determine the second language based on the 'isEnglish' flag
  const secondLanguage = isGeorgian ? georgian : english;
  const secondName = isGeorgian ? nameGeo : nameEng;
  const secondLanguageExamples = isGeorgian
    ? georgianExamples
    : englishExamples;

  // Determine the maximum length of both language arrays to ensure pairs are correctly displayed
  const maxLength = Math.max(french.length, secondLanguage.length);

  return (
    <VocabularyContainer>
      <h2>
        {nameFr} - {secondName}
      </h2>
      <WordCount>
        {t("Les mots")} <b>{maxLength}</b>
      </WordCount>
      <WordPairContainer>
        <VocabularyAccordion
          frenchWords={french}
          secondLanguage={secondLanguage}
          frenchExamples={frenchExamples}
          secondLanguageExamples={secondLanguageExamples}
        />
      </WordPairContainer>
      <NextStepChoise>
        <h2 onClick={handleArticleToggle}>
          {t("Masculin ou Féminin")}

          <RotatingChevron
            isActive={showArticle}
            onClick={handleArticleToggle}
          />
        </h2>
        <ChoiseArticle>
          {showArticle && (
            <ExerciseArticle frenchWords={selectedTopic.french} />
          )}
        </ChoiseArticle>
        <h2 onClick={handleQuizToggle}>
          {t("Testez votre vocabulaire")}

          <RotatingChevron isActive={showQuiz} onClick={handleQuizToggle} />

          {/* <ChevronImage
            src={ChevronDown}
            alt="ChevronDown"
            expanded={showQuiz}
            rotation={rotationQuiz}
          /> */}
        </h2>
        <ChoiseArticle>
          {showQuiz && <VocabularyQuiz vocabularyData={selectedTopic} />}
        </ChoiseArticle>
      </NextStepChoise>
    </VocabularyContainer>
  );
};

export default Vocabulary;
const VocabularyContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const WordPairContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 920px;
  border-bottom: 2px solid orange;

  @media (max-width: 920px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 630px;
  }

  @media (max-width: 500px) {
    width: 374px;
  }
`;
const WordCount = styled.div`
  width: 200px;
  border: 2px solid grey;
  padding: 0.5rem 1rem;
  text-align: center;
  margin: 0 auto;
  font-size: 1.2rem;

  b {
    font-size: 1.4rem;
  }
`;
const NextStepChoise = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ChoiseArticle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 920px;
  border-bottom: 2px solid orange;

  @media (max-width: 920px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 630px;
  }

  @media (max-width: 500px) {
    width: 374px;
  }
`;
const ChevronImage = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 0.5s ease;
  margin-left: 1rem;
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  cursor: pointer;
`;

import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchVocabularyTopics } from "../../../redux/slices/vocabularyTopics/vocabularyTopicSlice";
import styled from "styled-components";
import VocabularyQuiz from "./VocabularyQuiz";
import ExerciseArticle from "./ExerciseArticle";
import VocabularyAccordion from "./vocabularyAccordion/VocabularyAccordion";
import ChevronDown from "../../../../public/icons/chevron-down-24.png";
import RotatingChevron from "../../Utility/RotatingChevron";
import { useParams } from "react-router-dom";
import { fetchQuizData } from "../../../redux/slices/quizPictures/quizPictures";
import TopicText from "./Text/TopicText";
import Loading from "../../loading/Loading";
const Vocabulary = () => {
  const { topicId } = useParams();
  // console.log("topicId", topicId);
  const dispatch = useDispatch();
  const vocabularyData = useSelector((state) => state.quizData.currentTopic);
  const isLoading = useSelector((state) => state.quizData.isLoading);
  useEffect(() => {
    if (topicId) {
      dispatch(fetchQuizData(topicId));
    }
  }, []);

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
  // console.log("vocabularyTopicId", vocabularyTopicId);

  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";

  useEffect(() => {
    dispatch(fetchVocabularyTopics());
  }, [dispatch, vocabularyTopicId]);

  if (isLoading) {
    return <Loading />;
  }

  const french = vocabularyData?.words?.map((word) => word?.french);
  const english = vocabularyData?.words?.map((word) => word?.english);
  const georgian = vocabularyData?.words?.map((word) => word?.georgian);
  const definition = vocabularyData?.words?.map((word) => word?.definition);

  // Determine the second language based on the 'isEnglish' flag
  const secondLanguage = isGeorgian ? georgian : english;

  // Determine the maximum length of both language arrays to ensure pairs are correctly displayed

  return (
    <VocabularyContainer>
      <h2>{/* {nameFr} - {secondName} */}</h2>
      <WordCount>
        {t("Les mots")} <b>{}</b>
      </WordCount>
      <WordPairContainer>
        <VocabularyAccordion
          frenchWords={french}
          secondLanguage={secondLanguage}
          definition={definition}
        />
      </WordPairContainer>
      <div>
        <TopicText text={vocabularyData?.text} vocabulary={french} />
      </div>
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
            <ExerciseArticle frenchWords={french} parentsData={true} />
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
          {showQuiz && (
            <VocabularyQuiz
              french={french}
              english={english}
              georgian={georgian}
            />
          )}
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

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
import AccordionSection from "./AccordionSection";
const Vocabulary = () => {
  const { topicId } = useParams();
  const dispatch = useDispatch();
  const vocabularyData = useSelector((state) => state.quizData.currentTopic);
  const isLoading = useSelector((state) => state.quizData.isLoading);
  useEffect(() => {
    if (topicId) {
      dispatch(fetchQuizData(topicId));
    }
  }, []);
  const [openComponent, setOpenComponent] = useState(null);

  const [showArticle, setShowArticle] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showText, setShowText] = useState(false);

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
  const handleTopicText = () => {
    setRotationQuiz((prevRotation) => prevRotation + 180);
    setShowText(!showText);
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
      <WordCount>
        {t("Les mots")} <b>{french && french?.length}</b>
      </WordCount>
      <WordPairContainer>
        <VocabularyAccordion
          frenchWords={french}
          secondLanguage={secondLanguage}
          definition={definition}
        />
      </WordPairContainer>
      <TopicTextBox>
        <AccordionSection
          type="text"
          isOpen={openComponent === "text"}
          onToggle={() =>
            setOpenComponent(openComponent === "text" ? null : "text")
          }
          vocabularyData={vocabularyData}
          french={french}
        />
        <AccordionSection
          type="article"
          isOpen={openComponent === "article"}
          onToggle={() =>
            setOpenComponent(openComponent === "article" ? null : "article")
          }
          french={french}
        />

        <AccordionSection
          type="quiz"
          isOpen={openComponent === "quiz"}
          onToggle={() =>
            setOpenComponent(openComponent === "quiz" ? null : "quiz")
          }
          english={english}
          georgian={georgian}
          french={french}
        />
      </TopicTextBox>
    </VocabularyContainer>
  );
};

export default Vocabulary;
const VocabularyContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  align-items: flex-start;
  margin: 0;
  /* border: 2px solid red; */
  margin: 0 auto;
  /* width:100%; */
  @media (min-width: 577px) and (max-width: 767px) {
    width: 95%;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    /* max-width: 95%; */
    /* outline: 1px solid red; */
    padding: 0;
    margin: 0;
    width: 90%;
    margin-right: auto;
  }
  /* width: 100%; */
  @media (max-width: 392px) {
    /* outline: 1px solid red; */
    padding: 0;
    margin: 0;
    width: 90%;
    margin-right: auto;
  }
`;
const WordPairContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 2rem; */
  margin: 0 auto;
  border-bottom: 4px solid ${(props) => props.theme.tertiaryText};

  @media (max-width: 920px) {
    /* width: 768px; */
  }
  @media (max-width: 768px) {
    /* width: 630px; */
  }

  @media (max-width: 500px) {
    width: 374px;
    /* outline: 1px solid red; */
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
    border-bottom: 2px solid ${(props) => props.theme.primaryText};
  }
`;
const NextStepChoise = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TopicTextBox = styled(NextStepChoise)`
  border: 2px solid gold;
  margin: 0 auto;
  width: 98%;
  padding-left: 0.8rem;
`;

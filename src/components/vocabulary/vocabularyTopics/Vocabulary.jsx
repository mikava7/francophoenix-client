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
          type={t("Texte")}
          identifier="Texte"
          isOpen={openComponent === "Texte"}
          onToggle={() =>
            setOpenComponent(openComponent === "Texte" ? null : "Texte")
          }
          vocabularyData={vocabularyData}
          french={french}
        />
        <AccordionSection
          type={t("Genre des noms")}
          identifier="Genre des noms"
          isOpen={openComponent === "Genre des noms"}
          onToggle={() =>
            setOpenComponent(
              openComponent === "Genre des noms" ? null : "Genre des noms"
            )
          }
          french={french}
        />

        <AccordionSection
          type={t("Questionnaire")}
          identifier="Questionnaire"
          isOpen={openComponent === "Questionnaire"}
          onToggle={() =>
            setOpenComponent(
              openComponent === "Questionnaire" ? null : "Questionnaire"
            )
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
  align-items: center;
  overflow-x: hidden;
  margin: 0 auto;
  max-width: 100%;
  @media (min-width: 577px) and (max-width: 767px) {
    width: 95%;
  }
  @media (min-width: 393px) and (max-width: 576px) {
    padding: 0;
    margin: 0;
    width: 100%;
    overflow-x: hidden;
    /* outline: 1px solid red; */
    /* margin-right: auto; */
  }
  /* width: 100%; */
  @media (max-width: 392px) {
    padding: 0;
    margin: 0;

    overflow-x: hidden;
    width: 95%;
  }
`;
const WordPairContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 99%;

  margin: 0 auto;
  border-bottom: 4px solid ${(props) => props.theme.tertiaryText};

  @media (max-width: 920px) {
    width: 99%;
  }
  @media (min-width: 513px) and (max-width: 768px) {
    width: 99%;
  }
  @media (min-width: 420px) and (max-width: 512px) {
    width: 99%;
  }
  @media (min-width: 365px) and (max-width: 420px) {
    width: 100%;
  }
  @media (max-width: 364px) {
    width: 335px;
  }
  @media (max-width: 321px) {
    align-self: center;
    width: 279px;
  }
`;
const WordCount = styled.div`
  width: 200px;
  border: 2px solid grey;
  padding: 0.5rem 1rem;
  text-align: center;
  margin: 0 auto;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.secondaryBackground};
  margin-bottom: 1rem;
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
  /* border: 2px solid gold; */
  margin: 0 auto;
  padding-bottom: 5rem;
  padding-top: 1rem;

  width: 99%;
  /* outline: 2px solid red; */
  overflow-x: hidden;
  @media (min-width: 768px) and (max-width: 1220px) {
  }
  @media (min-width: 415px) and (max-width: 767px) {
  }
  @media (min-width: 359px) and (max-width: 415px) {
    /* outline: 2px solid blue; */
  }
  @media (max-width: 364px) {
  }
`;

import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchVocabularyTopics } from "../../../redux/slices/vocabularyTopics/vocabularyTopicSlice";
import styled from "styled-components";
import VocabularyQuiz from "./vocabularyQuiz/VocabularyQuiz";
import ExerciseArticle from "./ExerciseArticle";
import VocabularyAccordion from "./vocabularyAccordion/VocabularyAccordion";
import ChevronDown from "../../../assets/icons/chevron-down-24.png";
import RotatingChevron from "../../Utility/RotatingChevron";
import { useParams } from "react-router-dom";
import { fetchQuizData } from "../../../redux/slices/quizPictures/quizPictures";
import TopicText from "./Text/TopicText";
import Loading from "../../loading/Loading";
import AccordionSection from "./AccordionSection";
import { supportedLanguages } from "../../../localization/supportedLanguages";
import Localization from "../../../localization/Localization";
import WordJumble from "../../flashcard/trainers/wordTrainer/WordJumble";
import { fetchUserProgress } from "../../../redux/slices/userProgress/userProgressSlice";
const Vocabulary = () => {
  const { topicId } = useParams();
  const currentURL = window.location.href;
  // console.log("currentURL", currentURL);
  const dispatch = useDispatch();
  const [openComponent, setOpenComponent] = useState(null);

  const vocabularyData = useSelector((state) => state.quizData.currentTopic);
  // console.log("vocabularyData", vocabularyData);
  const topicType =
    vocabularyData &&
    vocabularyData.type &&
    vocabularyData.type.map((t) => t.typeEn === "noun");
  // console.log("topicType", topicType);
  const auth = useSelector((state) => state?.auth?.auth?.user) || {};

  const userId = auth._id;

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserProgress(userId));
    }
  }, [topicId, openComponent]);
  const userProgress =
    useSelector(
      (state) => state?.userProgress?.userProgressData?.userProgress?.vocabulary
    ) || [];
  // console.log("userProgress.", userProgress);
  const loading = useSelector((state) => state?.userProgress?.loading);
  const exercises = userProgress?.find(
    (topic) => topic.topic === topicId
  )?.exercises;
  const completedIndeces =
    exercises && exercises.length > 0
      ? exercises[0].completedSentenceIndices
      : [];
  const isLoading = useSelector((state) => state.quizData.isLoading);

  const words = vocabularyData?.words;
  const french = vocabularyData?.words?.map((word) => word?.french);
  const english = vocabularyData?.words?.map((word) => word?.english);
  const georgian = vocabularyData?.words?.map((word) => word?.georgian);
  const definition = vocabularyData?.words?.map((word) => word?.definition);

  // Determine the second language based on the 'isEnglish' flag

  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  // console.log("isGeorgian", isGeorgian);
  const secondLanguage = isGeorgian ? georgian : english;
  const selectedFlashcards = words?.map((wordObject) => ({
    word: wordObject?.french,
    definition: wordObject?.definition,
    secondLanguage: isGeorgian ? wordObject.georgian : wordObject.english,
  }));
  const targetLanguageCode = localStorage.getItem("targetLanguageSelected");
  const nativeLanguageCode = localStorage.getItem("nativeLanguageSelected");
  // console.log(vocabularyData);
  // Define the mapping of language codes to object properties
  const languagePropertyMap = {
    fr: "french",
    en: "english",
    ka: "georgian",
    // Add more mappings as needed
  };
  const titleLanguagePropertyMap = {
    fr: "topic",
    en: "topicEng",
    ka: "topicGeo",
  };

  // Determine the target language property based on the selected language code
  const targetLanguageProperty = languagePropertyMap[targetLanguageCode];
  const targetLanguageArray = vocabularyData?.words?.map(
    (word) => word?.[targetLanguageProperty]
  );
  const targetedTitleProperty = titleLanguagePropertyMap[targetLanguageCode];
  const targetedTitle = vocabularyData
    ? vocabularyData[targetedTitleProperty]
    : undefined;

  // console.log("vocabularyData", vocabularyData);
  // Determine the native language property based on the selected language code
  const nativeLanguageProperty = languagePropertyMap[nativeLanguageCode];
  const nativeLanguageArray = vocabularyData?.words?.map(
    (word) => word?.[nativeLanguageProperty]
  );
  const nativeLanguageTitle = vocabularyData
    ? isGeorgian
      ? vocabularyData.topicGeo
      : vocabularyData.topicEng
    : undefined;

  const contentId = vocabularyData && vocabularyData?._id;

  useEffect(() => {
    if (topicId) {
      dispatch(fetchQuizData(topicId));
    }
  }, []);

  const { vocabularyTopicId } = useParams();

  useEffect(() => {
    dispatch(fetchVocabularyTopics());
  }, [dispatch, vocabularyTopicId]);

  if (isLoading) {
    return <Loading />;
  }
  // console.log("topicType in vocabulary", topicType);
  return (
    <VocabularyContainer>
      <Localization />
      <WordCount>
        {t("Les mots")} <b>{french && french?.length}</b>
      </WordCount>
      <h1>{targetedTitle}</h1>
      <WordPairContainer>
        <VocabularyAccordion
          wordsInTargetLanguage={targetLanguageArray}
          secondLanguage={nativeLanguageArray}
          definition={definition}
          targetedTitle={targetedTitle}
          nativeLanguageTitle={nativeLanguageTitle}
          currentURL={currentURL}
          contentId={contentId}
        />
      </WordPairContainer>
      <TopicTextBox>
        <AccordionSection
          type={t("Mémoriser des mots")}
          identifier="Mémoriser des mots"
          isOpen={openComponent === "Mémoriser des mots"}
          onToggle={() =>
            setOpenComponent(
              openComponent === "Mémoriser des mots"
                ? null
                : "Mémoriser des mots"
            )
          }
          selectedFlashcards={selectedFlashcards}
        />

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
        {vocabularyData && vocabularyData.type && (
          <>
            {vocabularyData.type.some((t) => t.typeEn === "noun") && (
              <AccordionSection
                type={t("Genre des noms")}
                identifier="Genre des noms"
                // topicType={topicType}
                isOpen={openComponent === "Genre des noms"}
                onToggle={() =>
                  setOpenComponent(
                    openComponent === "Genre des noms" ? null : "Genre des noms"
                  )
                }
                french={french}
              />
            )}
          </>
        )}
        <AccordionSection
          type={t("Questionnaire")}
          identifier="Questionnaire"
          // topicType={topicType}

          isOpen={openComponent === "Questionnaire"}
          onToggle={() =>
            setOpenComponent(
              openComponent === "Questionnaire" ? null : "Questionnaire"
            )
          }
          secondLanguage={nativeLanguageArray}
          wordsInTargetLanguage={targetLanguageArray}
          french={french}
        />
        <AccordionSection
          type={t("Tapez le mot")}
          identifier="Tapez le mot"
          topicType={topicType}
          userId={userId}
          userProgress={userProgress}
          exercises={exercises}
          completedIndeces={completedIndeces}
          loading={loading}
          isOpen={openComponent === "Tapez le mot"}
          onToggle={() =>
            setOpenComponent(
              openComponent === "Tapez le mot" ? null : "Tapez le mot"
            )
          }
          secondLanguage={nativeLanguageArray}
          wordsInTargetLanguage={targetLanguageArray}
          selectedFlashcards={french}
        />
      </TopicTextBox>
      {/* <WordJumble selectedFlashcards={french} /> */}
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
  margin-top: 3rem;
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

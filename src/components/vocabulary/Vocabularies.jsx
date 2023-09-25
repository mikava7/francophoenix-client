import { useEffect, useState } from "react";
import Vocabulary from "./vocabularyTopics/Vocabulary";
import VocabularyTopics from "./vocabularyTopics/VocabularyTopics";
import { useDispatch, useSelector } from "react-redux";
import { StyledLink, Button } from "../../Styles/globalStyles";
import { Link } from "react-router-dom";
import { fetchVocabularyTopics } from "../../redux/slices/vocabularyTopics/vocabularyTopicSlice";
import Loading from "../loading/Loading";
import FavoriteWords from "../favoriteList/FavoriteWords";
import styled from "styled-components";
import { fetchTopicNames } from "../../redux/slices/quizPictures/quizPictures";
import { useTranslation } from "react-i18next";
import useScrollToTopOnRouteChange from "../../hooks/useScrollToTopOnRouteChange";

import { supportedLanguages } from "../../localization/supportedLanguages";
const Vocabularies = () => {
  useScrollToTopOnRouteChange();

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const topicNames = useSelector((state) => state.quizData.topicNames) || [];
  const isLoading = useSelector((state) => state.quizData.isLoading);
  const [selectedTopicId, setSelectedTopicId] = useState(null);

  const handleCategoryChange = (topicId) => {
    setSelectedTopicId(topicId);
  };

  useEffect(() => {
    dispatch(fetchTopicNames());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  const nativeLanguageCode = i18n.language;
  const targetLanguageCode = localStorage.getItem("targetLanguageSelected");

  const getTopicTitleInLanguage = (topic, languageCode) => {
    const language = supportedLanguages.find(
      (lang) => lang.code === languageCode
    );

    if (language) {
      switch (languageCode) {
        case "fr":
          return topic.topic;
        case "en":
          return topic.topicEng;
        case "ka":
          return topic.topicGeo;
        // Add more cases for other languages as needed
        default:
          return topic.topic; // Default to the topic name if language is not found
      }
    }

    return topic.topic; // Default to the topic name if language is not found
  };

  return (
    <VocabularyContainer>
      {topicNames.map((topic) => (
        <LocalStyledLink to={`/vocabulary-topics/${topic._id}`} key={topic._id}>
          <TopicCardContainer>
            <TopicImage src={topic.imageUrl} alt="Vocabulary Topic" />
            <WordsCount>
              {getTopicTitleInLanguage(topic, targetLanguageCode)}{" "}
              <TopicSecondTitle>
                {getTopicTitleInLanguage(topic, nativeLanguageCode)}{" "}
                {/* Modify this line */}
              </TopicSecondTitle>
            </WordsCount>{" "}
            <TopicDesription>
              <span>{t("Number of Words")}</span>
              <strong>{topic.wordsCount}</strong>
            </TopicDesription>
          </TopicCardContainer>
        </LocalStyledLink>
      ))}
      {/* ... */}
    </VocabularyContainer>
  );
};

export default Vocabularies;

const VocabularyContainer = styled.ul`
  display: flex;
  align-items: center;

  max-width: 100%;

  flex-wrap: wrap;
  h1 {
    margin: 0 auto;
  }
`;

const LocalStyledLink = styled(Link)`
  text-decoration: none;
  /* color: #333; */

  &:hover {
    color: #007bff;
  }
`;
const TopicCardContainer = styled.div`
  border-radius: 0.5rem;
  display: flex;
  height: 320px;
  width: 300px;
  flex-direction: column;
  align-items: center;
  outline: 2px solid ${(props) => props.theme.secondaryText};
  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.primaryText};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem auto;
  margin: 1rem;
  &:hover {
    outline: 2px solid ${(props) => props.theme.secondaryText};
    box-shadow: 4px 8px 10px rgba(32, 31, 31, 0.5);
    transform: scale(1.02);
    outline: none;
  }

  @media (min-width: 768px) and (max-width: 920px) {
    margin: 0.8rem;
  }

  @media (min-width: 577px) and (max-width: 767px) {
    margin: 0.4rem;
  }

  @media (min-width: 393px) and (max-width: 576px) {
    margin: 1rem auto;
    max-width: 370px;
  }

  @media (max-width: 392px) {
    display: flex;

    margin: 1rem auto;
    padding: 0;
    max-width: 280px;
  }
  @media (max-width: 348px) {
    margin: 1rem auto;
    max-width: 240px;
  }
  @media (max-width: 313px) {
    max-width: 210px;
  }
`;

const TopicImage = styled.img`
  width: 100%;
  height: 50%; /* Adjust this value to set the desired image height */
  overflow: hidden;
  object-fit: cover;
  background: white;
  margin-bottom: 8px;
  border-radius: 8px 8px 0 0;
`;

const TopicTitle = styled.h3`
  /* font-size: 20px; */
  margin: 0;
  padding: 0 0.4rem;
  line-height: ${(props) => props.theme.smallLineHeight};
  margin-bottom: 8px;
`;
const TopicSecondTitle = styled(TopicTitle)`
  font-size: ${(props) => props.theme.small};
`;

const WordsCount = styled.p`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  font-size: 16px;
  margin: 0;
  color: ${(props) => props.theme.primaryText};
  margin-bottom: 8px; /* Adjust this value for spacing */
`;

const TopicDesription = styled.h4`
  margin: 0 auto;
  margin-top: auto;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.secondaryText};

  strong {
    margin-left: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => props.theme.secondaryText};
    border-bottom: 2px solid ${(props) => props.theme.secondaryText};
  }
`;

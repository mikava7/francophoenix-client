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
  // useScrollToTopOnRouteChange();

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const topicNames = useSelector((state) => state.quizData.topicNames) || [];
  // console.log("topicNames", topicNames);
  const isLoading = useSelector((state) => state.quizData.isLoading);
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const categories = [
    ...new Set(topicNames.map((item) => JSON.stringify(item.category))),
  ].map((item) => JSON.parse(item));

  // const types = [...new Set(topicNames.map((topic) => topic.type))];
  // console.log("types", types);
  const handleCategoryChange = (topicId) => {
    setSelectedTopicId(topicId);
  };

  useEffect(() => {
    dispatch(fetchTopicNames());
  }, [dispatch]);

  const targetLanguageCode = localStorage.getItem("targetLanguageSelected");
  const nativeLanguageCode = localStorage.getItem("nativeLanguageSelected");
  const filteredTopics = selectedCategory
    ? topicNames.filter((topic) => {
        const categoryKey = `category${
          nativeLanguageCode.charAt(0).toUpperCase() +
          nativeLanguageCode.slice(1)
        }`;

        return topic.category[categoryKey] === selectedCategory;
      })
    : topicNames;

  // console.log("nativeLanguageCode", nativeLanguageCode);
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
  const handleSelectClick = () => {
    setShowOptions(!showOptions); // Toggle options on select click
  };
  const handleOptionClick = (category) => {
    const categoryKey = `category${
      nativeLanguageCode.charAt(0).toUpperCase() + nativeLanguageCode.slice(1)
    }`;

    setSelectedCategory(category[categoryKey] || category.categoryEn);
    setShowOptions(false); // Close options when an option is selected
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <StyledSelectContainer>
        <StyledCustomSelect onClick={handleSelectClick}>
          {selectedCategory || "All"}
          <CustomDropdownArrow />
        </StyledCustomSelect>
        <CustomOptionContainer showOptions={showOptions}>
          {categories.map((category) => (
            <CustomOption
              key={category.categoryFr}
              value={category.categoryEn}
              onClick={() => handleOptionClick(category)}
            >
              {
                category[
                  `category${
                    nativeLanguageCode.charAt(0).toUpperCase() +
                    nativeLanguageCode.slice(1)
                  }`
                ]
              }
            </CustomOption>
          ))}
        </CustomOptionContainer>
      </StyledSelectContainer>

      <VocabularyContainer>
        {filteredTopics.map((topic) => (
          <LocalStyledLink
            to={`/vocabulary-topics/${topic._id}`}
            key={topic._id}
          >
            <TopicCardContainer>
              <TopicImage src={topic.imageUrl} alt="Vocabulary Topic" />
              <WordsCount>
                <TopicTitle>
                  {getTopicTitleInLanguage(topic, targetLanguageCode)}{" "}
                </TopicTitle>
                <TopicSecondTitle>
                  {getTopicTitleInLanguage(topic, nativeLanguageCode)}{" "}
                  {/* Modify this line */}
                </TopicSecondTitle>
              </WordsCount>{" "}
              <TopicDesription>
                <span>{t("Nombre de mots")}</span>
                <strong>{topic.wordsCount}</strong>
              </TopicDesription>
              <TopicType>
                {(topic &&
                  topic.type &&
                  topic.type[
                    `type${
                      nativeLanguageCode?.charAt(0).toUpperCase() +
                      nativeLanguageCode?.slice(1)
                    }`
                  ]) ||
                  "Default Value"}
              </TopicType>
            </TopicCardContainer>
          </LocalStyledLink>
        ))}
        {/* ... */}
      </VocabularyContainer>
    </div>
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
  position: relative;
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
  transition: all 0.3s ease; /* Add a transition here */

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
  font-size: 20px;
  margin: 0;
  padding: 0 0.4rem;
  line-height: ${(props) => props.theme.smallLineHeight};
  margin-bottom: 8px;
  /* hyphens: auto; */
  /* To allow long words to break and wrap */
  word-wrap: break-word;
`;
const TopicSecondTitle = styled(TopicTitle)`
  font-size: ${(props) => props.theme.small};
  word-wrap: break-word;
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
const TopicType = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 200px;
  height: 30px;
  background-color: ${(props) => props.theme.highlight4};
  color: ${(props) => props.theme.primaryText};
  text-align: center;
  padding: 4px;
  border-radius: 8px 8px 0 0;
  transform: translate(13%, -50%) rotate(-90deg);
  font-weight: bold;
  @media (max-width: 392px) {
    height: 25px;
    left: 48%;
  }
`;

const StyledSelectContainer = styled.div`
  position: relative;
  width: 300px;
  margin-right: 3rem;
  margin-left: auto;
`;

const StyledCustomSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.highlight4};
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryText};
  color: ${(props) => props.theme.primaryBackground};
  cursor: pointer;
`;

const CustomDropdownArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid ${(props) => props.theme.primaryBackground};
`;

const CustomOptionContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 1%;
  width: 105%;
  background-color: ${(props) => props.theme.primaryBackground};
  border: 1px solid ${(props) => props.theme.highlight4};
  border-top: none;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1;
  display: ${(props) =>
    props.showOptions ? "block" : "none"}; /* Show/hide options */
`;

const CustomOption = styled.div`
  padding: 10px;
  color: ${(props) => props.theme.primaryText};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.highlight4};
  }
`;

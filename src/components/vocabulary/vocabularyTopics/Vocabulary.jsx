import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchVocabularyTopics } from "../../../redux/slices/vocabularyTopics/vocabularyTopicSlice";
import Listen from "../../Listen";
import Favorite from "../../Favorite";
import styled from "styled-components";
import VocabularyQuiz from "./VocabularyQuiz";
const Vocabulary = () => {
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
  const { french, english, georgian, nameFr, nameGeo, nameEng } = selectedTopic;

  // Determine the second language based on the 'isEnglish' flag
  const secondLanguage = isGeorgian ? georgian : english;
  const secondName = isGeorgian ? nameGeo : nameEng;

  // Determine the maximum length of both language arrays to ensure pairs are correctly displayed
  const maxLength = Math.max(french.length, secondLanguage.length);

  return (
    <div>
      <h2>
        {nameFr} - {secondName}
      </h2>
      <WordCount>
        {t("Les mots")} <b>{maxLength}</b>
      </WordCount>
      <WordPairContainer>
        {Array.from({ length: maxLength }).map((_, index) => (
          <WordPairItem key={index}>
            <span>{french[index] || ""}</span>
            <IconsWrapper>
              <Listen />
              <Favorite />
            </IconsWrapper>
            <span>{secondLanguage[index] || ""}</span>
          </WordPairItem>
        ))}
      </WordPairContainer>
      <VocabularyQuiz vocabularyData={selectedTopic} />
    </div>
  );
};

export default Vocabulary;

const WordPairContainer = styled.li`
  margin: 0 auto;
  padding: 0.5rem 1rem;
  min-width: 370px;
`;

const WordPairItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  border: 2px solid grey;
  padding: 0 1rem;
  margin: 1rem;
  background-color: #030303;
  color: ${(props) => props.theme.colors.text2};
  background-color: ${(props) => props.theme.colors.text};
  gap: 1rem;
  border-radius: 6px;
  font-size: 1.4rem;
  &:hover {
    cursor: pointer;
    background-color: #e6af68;
  }
  span {
    padding: 0.5rem 1rem;
    width: 300px;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 50px;
  max-width: 100px;
  text-align: center;
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

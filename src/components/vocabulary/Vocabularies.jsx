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

const Vocabularies = () => {
  const dispatch = useDispatch();

  const topicNames = useSelector((state) => state.quizData.topicNames) || [];

  // console.log("topicNames", topicNames);
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
  return (
    <VocabularyContainer>
      <StyledLink to={"/vocabulary/favoritewords"}>
        <FavoriteLinkBox>Favorite Words</FavoriteLinkBox>
      </StyledLink>
      <div>
        <ul>
          {topicNames.map((topic) => (
            <LocalStyledLink
              to={`/vocabulary-topics/${topic._id}`}
              key={topic._id}
            >
              <TopicCardContainer>
                <TopicImage src={topic.imageUrl} alt="Topic" />
                <TopicTitle>{topic.topic}</TopicTitle>
                <WordsCount>
                  Words Count:
                  <strong>{topic.wordsCount}</strong>
                </WordsCount>
                <p>id{topic._id}</p>
              </TopicCardContainer>
            </LocalStyledLink>
          ))}
        </ul>
      </div>
    </VocabularyContainer>
  );
};

export default Vocabularies;

const VocabularyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.1rem;
  margin: 1.1rem;
  height: 400px;

  ul {
    display: flex;
    flex-wrap: wrap;

    /* flex-direction: row; */
  }
`;

const FavoriteLinkBox = styled(Button)`
  transition: background-color 0.3s ease;
  width: auto;
`;
const LocalStyledLink = styled(Link)`
  text-decoration: none;
  color: #333;

  &:hover {
    color: #007bff;
  }
`;
const TopicCardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 0.5rem;

  margin: 1.1rem;
  display: flex;
  width: 250px;
  flex-direction: column;
  align-items: center;
  background-color: #fffafa;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const TopicImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  /* border-radius: 50%; */
  margin-bottom: 8px;
  border: 2px solid grey;
`;

const TopicTitle = styled.h2`
  font-size: 20px;
  margin: 0;
  margin-bottom: 8px;
`;

const WordsCount = styled.h3`
  font-size: 16px;
  margin: 0;
  color: #666;
  margin-bottom: 1.1rem;

  strong {
    margin-left: 0.2rem;
    font-size: 1.2rem;

    font-weight: bold;
    color: #000;
    border-bottom: 2px solid black;
  }
`;

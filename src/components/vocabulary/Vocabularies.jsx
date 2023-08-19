import React, { useEffect } from "react";
import Vocabulary from "./vocabularyTopics/Vocabulary";
import VocabularyTopics from "./vocabularyTopics/VocabularyTopics";
import { useDispatch, useSelector } from "react-redux";
import { StyledLink, Button } from "../../Styles/globalStyles";
import { Link } from "react-router-dom";
import { fetchVocabularyTopics } from "../../redux/slices/vocabularyTopics/vocabularyTopicSlice";
import Loading from "../loading/Loading";
import FavoriteWords from "../favoriteList/FavoriteWords";
import styled from "styled-components";
const Vocabularies = () => {
  const dispatch = useDispatch();

  const vocabularyTopics =
    useSelector((state) => state.vocabularyTopics.vocabularyTopics) || [];

  const isLoading = useSelector((state) => state.vocabularyTopics.isLoading);
  useEffect(() => {
    dispatch(fetchVocabularyTopics());
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <VocabularyContainer>
      <StyledLink to={"/vocabulary/favoritewords"}>
        <FavoriteLinkBox>Favorite Words</FavoriteLinkBox>
      </StyledLink>
      {vocabularyTopics.map((topic) => (
        <TopicBox>
          <LocalStyledLink
            key={topic._id}
            to={`/vocabulary-topics/${topic._id}`}
          >
            <VocabularyTopics vocabularyTopics={[topic]} />
          </LocalStyledLink>
        </TopicBox>
      ))}
    </VocabularyContainer>
  );
};

export default Vocabularies;

const VocabularyContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  max-width: 100%;
  height: 100vh;
  background: grey;
`;
const TopicBox = styled.span`
  background: red;
  display: flex;
  flex-wrap: wrap;

  width: 400px;
  height: 400px;
  border: 2px solid black;
`;
const FavoriteLinkBox = styled(Button)`
  transition: background-color 0.3s ease;
  width: auto;
`;
const LocalStyledLink = styled(Link)`
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

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
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <StyledLink to={"/vocabulary/favoritewords"}>
        <FavoriteLinkBox>Favorite Words</FavoriteLinkBox>
      </StyledLink>
      {/* Render each topic with a Link to its specific page */}
      {vocabularyTopics.map((topic) => (
        <StyledLink key={topic._id} to={`/vocabulary-topics/${topic._id}`}>
          <VocabularyTopics vocabularyTopics={[topic]} />
        </StyledLink>
      ))}
    </div>
  );
};

export default Vocabularies;

const FavoriteLinkBox = styled(Button)`
  transition: background-color 0.3s ease;
  width: auto;
`;

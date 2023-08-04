import React, { useEffect } from "react";
import Vocabulary from "./vocabularyTopics/Vocabulary";
import VocabularyTopics from "./vocabularyTopics/VocabularyTopics";
import { useDispatch, useSelector } from "react-redux";
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
const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  position: relative;
  transition: 0.8s all linear;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.text};

  &:hover {
    color: ${(props) => props.theme.colors.text2};
  }
`;
const FavoriteLinkBox = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

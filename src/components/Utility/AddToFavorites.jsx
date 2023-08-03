// AddToFavorites.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/slices/favorites/addToFavorite";
import FavoriteIMG from "../../../public/icons/starFilled.png";
import styled from "styled-components";

const AddToFavorites = ({
  word,
  secondLanguage,
  frenchExamples,
  secondLanguageExamples,
}) => {
  const favorites = useSelector((state) => state.isFavorite.favorites);
  const dispatch = useDispatch();

  const isWordInFavorites = favorites.some(
    (favorite) => favorite.word === word
  );
  const handleFavorite = () => {
    if (isWordInFavorites) {
      dispatch(removeFromFavorites(word));
    } else {
      dispatch(
        addToFavorites({
          word,
          frenchExamples,
          secondLanguageExamples,
          secondLanguage,
        })
      );
    }
  };

  return (
    <AddToFavoriteBox>
      <AddToFavoriteImg
        src={FavoriteIMG}
        alt="Favorite"
        onClick={handleFavorite}
        isWordInFavorites={isWordInFavorites}
      />
    </AddToFavoriteBox>
  );
};

export default AddToFavorites;

const AddToFavoriteBox = styled.div`
  display: flex;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
`;
const AddToFavoriteImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 1.5rem;
  max-height: 1.5rem;

  filter: ${(props) => (props.isWordInFavorites ? "none" : "invert(50%)")};
`;

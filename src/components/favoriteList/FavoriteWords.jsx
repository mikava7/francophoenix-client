// FavoriteWords.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromFavorites,
  clearFavorites,
} from "../../redux/slices/favorites/addToFavorite";
import styled from "styled-components";
import FavoriteIMG from "../../assets/icons/starFilled.png";
import { useTranslation } from "react-i18next";
// import ListenImg from "../../../public/icons/sound-50.png";
import useListenWord from "../../hooks/useListenWord";
import AccordionExpendedContent from "../vocabulary/vocabularyTopics/vocabularyAccordion/AccordionExpendedContent";
import { Button } from "../../Styles/globalStyles";
import Listen from "../Listen";
const FavoriteWords = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const { t } = useTranslation();
  const favorites = useSelector((state) => state.isFavorite.favorites);
  const dispatch = useDispatch();

  const { handleListen, isActiveStates } = useListenWord();

  const handleRemoveFavorite = (index) => {
    dispatch(removeFromFavorites(favorites[index]));
  };

  const handleClearAllFavorites = () => {
    dispatch(clearFavorites());
  };

  const toggleAccordion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <FavoriteWordsContainer>
      <h2>{t("Mots favoris")}</h2>
      {favorites.length === 0 ? (
        <p>{t("Pas de mots favoris")}</p>
      ) : (
        <FavoriteWordsUl>
          {favorites
            .filter((favorite) => Object.keys(favorite).length > 0)
            .map((favorite, index) => (
              <FavoriteInstance key={index}>
                <AccordionHeader>
                  <span>{favorite.word}</span>
                  <span>{favorite.secondLanguage}</span>
                  <IconsWrapper>
                    <AccordionListenIcon
                      onClick={handleListen(favorite.word)}
                      isActive={isActiveStates[index]}
                    >
                      <Listen />
                    </AccordionListenIcon>

                    <AddToFavoriteImg
                      src={FavoriteIMG}
                      alt="Favorite"
                      onClick={() => handleRemoveFavorite(index)}
                    />
                    <ChevronIcon
                      onClick={() => toggleAccordion(index)}
                      isExpanded={index === expandedIndex}
                    >
                      &#9662;
                    </ChevronIcon>
                  </IconsWrapper>
                </AccordionHeader>

                <AccordionExpendedContent
                  index={index}
                  expandedIndex={expandedIndex}
                  frenchExamples={favorite.frenchExamples}
                  secondLanguageExamples={favorite.secondLanguageExamples}
                />
              </FavoriteInstance>
            ))}
          <Button onClick={handleClearAllFavorites}>Clear All</Button>
        </FavoriteWordsUl>
      )}
    </FavoriteWordsContainer>
  );
};

export default FavoriteWords;
const FavoriteWordsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 365px;
  width: 100vw;
  height: 100%;
  margin: 0 0.4rem;
`;

const FavoriteWordsUl = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  border-radius: 12px;
  min-width: 365px;
  max-width: 100%;
`;

const FavoriteInstance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 1.4rem;
  min-height: 4rem;
  max-width: 100%;
  border-bottom: 3px solid gold;
  padding: 0.5rem;
  border-radius: 0 0 0 12px;
  margin-bottom: 1rem;
  &:hover {
    /* background-color: #48b456; */
  }
`;
const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  cursor: pointer;
  background-color: ${(props) =>
    props.isExpanded ? "#e6af68" : props.theme.background};
  color: ${(props) => props.theme.text};
  span {
    padding: 1rem;
    min-width: 30%;

    &:first-child {
      font-weight: bold;
    }
  }

  @media (max-width: 920px) {
    font-size: 1.3rem;
    padding: 0.8rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.6rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    padding: 0.6rem;
  }
`;

const ClearAllButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  width: 10rem;
  font-size: 1.2rem;

  background: #001a1a;
  color: gold;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: gold;
    color: #001a1a;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 60px;
  max-width: 120px;
  text-align: center;
  margin-left: auto;
  margin-right: 3rem;
  pointer-events: ${(props) => (props.isExpanded ? "none" : "auto")};
`;

const AddToFavoriteImg = styled.img`
  max-width: 1.5rem;
  max-height: 1.5rem;
  margin-left: auto;
`;
const ChevronIcon = styled.div`
  transform: ${(props) =>
    props.isExpanded ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  margin: 0 0.5rem;
`;
const AccordionListenIcon = styled.div`
  display: flex;
  align-items: center;
  & > img {
    width: ${(props) => props.width || "1.2rem"};
    height: ${(props) => props.height || "1.2rem"};
    cursor: pointer;

    filter: ${(props) => (props.isActive ? "none" : "invert(-150%)")};
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.isActive ? "scale(1.1)" : "scale(1)")};
  }
`;

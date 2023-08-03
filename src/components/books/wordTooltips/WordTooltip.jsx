import React, { useState } from "react";
import styled from "styled-components";
import flashCardIcon from "../../../../public/icons/flash-card.png";
import Listen from "../../Listen";
import Favorite from "../../Favorite";
import AddToFlashcards from "../../Utility/AddToFlashcards";
const WordTooltip = ({ content, children }) => {
  const [isActive, setIsActive] = useState(false);
  const [isStarred, setIsStarred] = useState(true);
  const [isAdded, setIsAdded] = useState(false);

  const speakWord = (word) => {
    responsiveVoice.speak(word, "French Female");
  };

  const handleAddToFlashcards = (event) => {
    event.stopPropagation();
    console.log("handleAddToFlashcards Clicked");
    setIsAdded(!isAdded);
  };

  const handleFavorite = (event) => {
    event.stopPropagation();
    console.log("handleFavorite Clicked");

    setIsStarred(!isStarred);
  };
  const addToFlashCards = (event) => {
    console.log("flashCardIconContainer Clicked");
    event.stopPropagation();
  };
  const handleListen = (event) => {
    event.stopPropagation();

    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 2000);
  };

  return (
    <TooltipContainer>
      {children}
      <ContentAndIconWrapper>
        <TooltipContent onClick={() => speakWord(content)}>
          {content}
        </TooltipContent>
        <IconsBox>
          <ListenContainer onClick={() => speakWord(content)}>
            <Listen handleListen={handleListen} isActive={isActive} />
          </ListenContainer>
          <AddToFlashcards
            handleAddToFlashcards={handleAddToFlashcards}
            isAdded={isAdded}
          />

          <Favorite handleFavorite={handleFavorite} isStarred={isStarred} />
        </IconsBox>
      </ContentAndIconWrapper>
    </TooltipContainer>
  );
};

export default WordTooltip;
const TooltipContainer = styled.div`
  position: relative;
  display: inline;
  position: relative;
  background-color: #80808030;
  /* padding: 0.2rem 0.3rem; */
  border-radius: 4px;
  outline: 2px solid #808080dc;
`;
const ContentAndIconWrapper = styled.div`
  display: flex; /* Flex container to put the content and icon side by side */
  position: absolute;
  display: flex;
  position: absolute;
  top: -90%;
  left: 100%;
  transform: translate(-30%, -50%);

  align-items: center;
  justify-content: center;
  max-width: 200px;

  background-color: #fffd70;
  outline: 2px solid #f89411;

  /* padding: 0.2rem 0.3rem; */
  border-radius: 4px;
  font-size: 1.1rem;
`;
const TooltipContent = styled.div`
  display: inline-block; /* Change from position: absolute; to inline-block */

  color: black;

  width: 100%;
  height: 2rem;
  border-radius: 4px;

  visibility: visible;
  opacity: 1;
  text-indent: 5px;
  transition: opacity 0.3s ease;
`;

const IconsBox = styled.span`
  display: flex;
  max-width: 100%;
  padding-right: 4px;
  gap: 4px;
`;
const ListenContainer = styled.span``;

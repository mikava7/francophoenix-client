import React, { useState } from "react";
import styled from "styled-components";
import flashCardIcon from "../../../../public/icons/flash-card.png";
import Listen from "../../Listen";
import AddToFlashcards from "../../Utility/AddToFlashcards";
import AddToFavorites from "../../Utility/AddToFavorites";
import useListenWord from "../../../hooks/useListenWord";
const WordTooltip = ({ content, children }) => {
  const { handleListen } = useListenWord();

  const [isActive, setIsActive] = useState(false);
  const [isStarred, setIsStarred] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  // console.log("children", children);
  // const speakWord = (word) => {
  //   responsiveVoice.speak(word, "French Female");
  // };

  const handleAddToFlashcards = (event) => {
    event.stopPropagation();
    console.log("handleAddToFlashcards Clicked");
    setIsAdded(!isAdded);
  };

  return (
    <TooltipContainer>
      {children}
      <ContentAndIconWrapper>
        <TooltipContent>{content}</TooltipContent>
        <IconsBox>
          <ListenContainer onClick={handleListen(children.props.children)}>
            <Listen />
          </ListenContainer>
          <AddToFlashcards
            word={children}
            frenchExamples={"content missing"}
            secondLanguageExamples={"content missing"}
            secondLanguage={content}
          />
          <AddToFavorites
            word={children}
            frenchExamples={"content missing"}
            secondLanguageExamples={"content missing"}
            secondLanguage={content}
          />

          {/* <Favorite handleFavorite={handleFavorite} isStarred={isStarred} /> */}
        </IconsBox>
      </ContentAndIconWrapper>
    </TooltipContainer>
  );
};

export default WordTooltip;
const TooltipContainer = styled.div`
  display: inline;
  position: relative;
  background-color: #c223232f;
  /* padding: 0.2rem 0.3rem; */
  border-radius: 4px;
  outline: 2px solid #808080dc;
  width: 100%;
`;
const ContentAndIconWrapper = styled.div`
  display: flex;
  position: absolute;
  top: -90%;
  left: 100%;
  transform: translate(-30%, -50%);
  align-items: center;
  justify-content: center;

  height: 3rem;
  background-color: #fffd70;
  outline: 2px solid #f89411;

  border-radius: 4px;
  font-size: 1.1rem;
`;
const TooltipContent = styled.div`
  display: inline-block; /* Change from position: absolute; to inline-block */

  color: black;

  max-width: 100%;
  height: 2rem;
  border-radius: 4px;
  margin-right: 1rem;
  visibility: visible;
  opacity: 1;
  text-indent: 5px;
  transition: opacity 0.3s ease;
  min-width: 200px;
  max-width: 350px;
`;

const IconsBox = styled.span`
  display: flex;
  align-items: center;
  max-width: 100%;
  padding-right: 4px;
  gap: 4px;
`;

const ListenContainer = styled.span``;

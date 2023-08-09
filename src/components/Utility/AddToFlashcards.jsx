import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFlashcard,
  removeFromFlashcards,
} from "../../redux/slices/fleshCards/fleshCardSlice";
import FlashCardIcon from "../../../public/icons/flash-card.png";

const AddToFlashcards = ({
  word,
  secondLanguage,
  frenchExamples,
  secondLanguageExamples,
}) => {
  const flashcards = useSelector((state) => state.flashcards.flashcards);
  const dispatch = useDispatch();
  const isWordInFlashcards = flashcards.some(
    (flashcard) => flashcard.word === word
  );
  const handleFlashcards = () => {
    if (isWordInFlashcards) {
      dispatch(removeFromFlashcards(word));
    } else {
      dispatch(
        addToFlashcard({
          word,
          frenchExamples,
          secondLanguageExamples,
          secondLanguage,
        })
      );
    }
  };
  return (
    <AddButton onClick={handleFlashcards}>
      <IconWrapper isWordInFlashcards={isWordInFlashcards}>
        <img src={FlashCardIcon} alt="FlashCardIcon" />
      </IconWrapper>
    </AddButton>
  );
};

const AddButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;

  img {
    width: 1.2rem;
    height: 1.2rem;
    cursor: pointer;
    filter: ${(props) => (props.isWordInFlashcards ? "" : "invert(50%)")};
    transition: transform 0.3s ease-in-out;
    transform: ${(props) =>
      props.isWordInFlashcards ? "scale(1.1)" : "scale(1)"};
  }
`;

export default AddToFlashcards;

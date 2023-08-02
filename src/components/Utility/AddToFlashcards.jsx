import React, { useState } from "react";
import styled from "styled-components";
import FlashCardIcon from "../../../public/icons/flash-card.png";

const AddToFlashcards = ({ isAdded, handleAddToFlashcards, word }) => {
  return (
    <AddButton onClick={handleAddToFlashcards}>
      <IconWrapper isAdded={isAdded}>
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
    filter: ${(props) => (props.isAdded ? "" : "invert(50%)")};
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.isAdded ? "scale(1.1)" : "scale(1)")};
  }
`;

export default AddToFlashcards;

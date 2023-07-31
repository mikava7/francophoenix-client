import React, { useState } from "react";
import styled from "styled-components";
import FlashCardIcon from "../../../public/icons/flash-card.png";

const AddToFlashcards = ({ word }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToFlashcards = () => {
    // Add logic here to handle adding/removing the word to/from flashcards
    setIsAdded(!isAdded);
  };

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
    width: 1.6rem;
    height: 1.6rem;
    cursor: pointer;
    filter: ${(props) => (props.isAdded ? "" : "invert(50%)")};
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.isAdded ? "scale(1.1)" : "scale(1)")};
  }
`;

export default AddToFlashcards;

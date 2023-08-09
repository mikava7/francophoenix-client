import React, { useState, useEffect } from "react";

const WordTrainer = ({ selectedFlashcards }) => {
  console.log("selectedFlashcards", selectedFlashcards);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const handleShowAnswer = () => {
    setIsAnswerVisible(true);
  };

  const handleNextFlashcard = () => {
    setIsAnswerVisible(false);
    setCurrentFlashcardIndex(currentFlashcardIndex + 1);
  };

  useEffect(() => {
    setCurrentFlashcardIndex(0);
    setIsAnswerVisible(false);
  }, [selectedFlashcards]);

  if (selectedFlashcards.length === 0) {
    return <div>No flashcards selected for training.</div>;
  }

  const currentFlashcard = selectedFlashcards[currentFlashcardIndex];

  return (
    <div>
      <h2>Word Trainer</h2>
      <p>
        Flashcard {currentFlashcardIndex + 1} of {selectedFlashcards.length}
      </p>
      <p>Word: {currentFlashcard.word}</p>
      <p>Translation: {currentFlashcard.secondLanguage}</p>
      {isAnswerVisible && (
        <p>Examples: {currentFlashcard.frenchExamples.join(", ")}</p>
      )}
      <button onClick={handleShowAnswer}>Show Answer</button>
      <button onClick={handleNextFlashcard}>Next Flashcard</button>
    </div>
  );
};

export default WordTrainer;

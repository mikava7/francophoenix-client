import { useState, useEffect } from "react";

const useListenWord = () => {
  const [isActiveStates, setIsActiveStates] = useState([]);

  // Use useEffect to handle voice changes
  useEffect(() => {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) {
      window.speechSynthesis.addEventListener("voiceschanged", () => {
        const updatedVoices = window.speechSynthesis.getVoices();
        if (updatedVoices.length > 0) {
          // Handle voice changes, if necessary
          // For example, you can set a default voice for speech synthesis
        }
      });
    }
  }, []);

  // Handle word listening functionality
  const handleListen = (word, targetLanguageCode) => (event) => {
    event.stopPropagation();
    // Split the word based on both open and close parentheses
    const parts = word.split(/[()]/);

    // Get the first part of the split, which is the word without parentheses
    const wordWithoutParentheses = parts[0];

    // Call the speakWord function to read the word without parentheses aloud
    speakWord(wordWithoutParentheses, targetLanguageCode);

    // Find the index of the word in the isActiveStates array
    const index = isActiveStates.findIndex((state) => state.word === word);

    // If the word is not in the array, add it with isActive set to true
    if (index === -1) {
      setIsActiveStates((prevStates) => [
        ...prevStates,
        { word: word, isActive: true },
      ]);
    } else {
      // If the word is already in the array, update its isActive state to true
      setIsActiveStates((prevStates) =>
        prevStates.map((state, i) =>
          i === index ? { ...state, isActive: true } : state
        )
      );
    }

    // After a delay, update the isActive state to false for the word
    setTimeout(() => {
      setIsActiveStates((prevStates) =>
        prevStates.map((state) => ({ ...state, isActive: false }))
      );
    }, 1500);
  };

  // Function to speak the word using SpeechSynthesis API
  const speakWord = (word, targetLanguageCode) => {
    const speechUtterance = new SpeechSynthesisUtterance(word);
    speechUtterance.lang = targetLanguageCode || "fr-FR";
    window.speechSynthesis.speak(speechUtterance);
  };

  // Return the necessary functions and state for word listening
  return { handleListen, isActiveStates };
};

export default useListenWord;

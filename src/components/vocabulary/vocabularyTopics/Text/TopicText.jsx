import React from "react";
import styled from "styled-components";
import SentenceBuilderEx from "../../../sentenceBuilder/SentenceBuilderEx";
import { displayWord, shuffleArray } from "../../../Utility/utils";
const displayCleanWord = (word) => {
  if (word?.startsWith("l'") || word.startsWith("L'")) {
    return word?.slice(2);
  } else {
    return word;
  }
};

const TopicText = ({ text, vocabulary, isTextVerbs, verbFormMapping }) => {
  const words = displayWord(text)?.split(" ");
  // console.log("words", words);
  console.log({ isTextVerbs, verbFormMapping });

  const generateSentenceBuilderData = (text) => {
    const sentences = text?.split(".");
    const sentenceObjects = sentences?.map((sentence) => {
      const trimmedSentence = sentence?.trim(); // Trim leading and trailing whitespace
      const words = trimmedSentence
        .split(/\s|,/)
        .filter((word) => word.length > 0);
      const shuffledWords = shuffleArray(words);

      return { sentence: trimmedSentence, words: shuffledWords };
    });
    return sentenceObjects; // Return the generated data
  };
  const sentenceData = generateSentenceBuilderData(text);
  // console.log("sentenceData in TopicText", sentenceData);

  const cleanedVocabulary = vocabulary?.map(
    (word) =>
      displayWord(word)
        ?.toLowerCase()
        ?.replace(" (f.)", "") // Remove "(f.)" if present
        ?.replace(" (m.)", "") // Remove "(f.)" if present
  );
  // console.log("Cleaned Vocabulary:", cleanedVocabulary);

  return (
    <TopicTextContainer>
      {words?.map((word, index) => {
        const cleanWord = displayCleanWord(word)
          .toLowerCase()
          .replace(/[^a-z]/g, "");
        // console.log("cleanWord", cleanWord);

        const isVocabularyWord = cleanedVocabulary?.includes(cleanWord);

        // console.log(word, cleanWord, isVocabularyWord);

        return isVocabularyWord ? (
          <Highlighted key={index}>{word} </Highlighted>
        ) : (
          <span key={index}>{word} </span>
        );
      })}

      <SentenceBuilderEx sentenceData={sentenceData} />
    </TopicTextContainer>
  );
};

export default TopicText;

const TopicTextContainer = styled.div`
  padding: 1rem 2rem;
  line-height: 1.6;
  font-size: 1.2rem;
  text-indent: 20px;
  letter-spacing: 1.1px;
`;

const Highlighted = styled.span`
  background-color: yellow;
  padding: 0.2rem;
  font-weight: bold;
`;

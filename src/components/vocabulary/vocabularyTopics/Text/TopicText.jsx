import React from "react";
import styled from "styled-components";

const displayWord = (word) => {
  if (word.startsWith("les ")) {
    return word.slice(4);
  } else if (word.startsWith("le/la ")) {
    return null;
  } else {
    return word.slice(3);
  }
};

const TopicText = ({ text, vocabulary }) => {
  const words = text?.split(" ");
  console.log("words", words);
  const cleanedVocabulary = vocabulary?.map((word) =>
    displayWord(word)
      .toLowerCase()
      .replace(/[^a-z]/g, "")
  );

  console.log("Cleaned Vocabulary:", cleanedVocabulary);

  return (
    <TopicTextContainer>
      {words?.map((word, index) => {
        const cleanWord = word.toLowerCase().replace(/[^a-z]/g, "");
        // console.log("cleanWord", cleanWord);

        const isVocabularyWord = cleanedVocabulary.includes(cleanWord);

        console.log(word, cleanWord, isVocabularyWord);

        return isVocabularyWord ? (
          <Highlighted key={index}>{word} </Highlighted>
        ) : (
          <span key={index}>{word} </span>
        );
      })}
    </TopicTextContainer>
  );
};

export default TopicText;

const TopicTextContainer = styled.div`
  padding: 1rem 2rem;
  line-height: 1.4;
  text-indent: 20px;
`;

const Highlighted = styled.span`
  background-color: yellow;
  padding: 0.2rem;
  font-weight: bold;
`;

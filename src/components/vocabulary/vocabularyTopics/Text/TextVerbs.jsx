import React from "react";
import styled from "styled-components";

const TextVerbs = ({ text, verbFormMapping }) => {
  const words = text.split(" ");

  return (
    <TextContainer>
      {words.map((word, index) => {
        const cleanWord = word.toLowerCase().replace(/[^a-z]/g, "");
        const verbForm = verbFormMapping[cleanWord];

        if (verbForm) {
          return (
            <VerbTooltip key={index}>
              <span>{word}</span>
              <VerbForm>{verbForm}</VerbForm>
            </VerbTooltip>
          );
        } else {
          return <span key={index}>{word} </span>;
        }
      })}
    </TextContainer>
  );
};

export default TextVerbs;

const TextContainer = styled.div`
  padding: 1rem 2rem;
  line-height: 1.6;
  font-size: 1.2rem;
  text-indent: 20px;
  letter-spacing: 1.1px;
`;

const VerbTooltip = styled.span`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover span {
    display: block;
  }
`;

const VerbForm = styled.span`
  display: none;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f0f0f0;
  padding: 0.5rem;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  font-size: 0.9rem;
  white-space: nowrap;
  z-index: 1;
`;

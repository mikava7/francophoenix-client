import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import ChevronDown from "../../../../../public/icons/chevron-down-24.png";

const DialoguePhrase = ({ phrases }) => {
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  const french = phrases.map((phrase) => phrase.french);
  const english = phrases.map((phrase) => phrase.english);
  const georgian = phrases.map((phrase) => phrase.georgian);

  const secondLanguage = isGeorgian ? georgian : english;

  const [phraseChevronRotation, setPhraseChevronRotation] = useState({});
  const [showGeoContent, setShowGeoContent] = useState(
    Array(georgian.length).fill(false)
  );

  const handlePhraseChevronToggle = (phraseIndex) => {
    setPhraseChevronRotation((prevRotations) => ({
      ...prevRotations,
      [phraseIndex]: prevRotations[phraseIndex] === 0 ? 180 : 0,
    }));

    setShowGeoContent((prevShowGeoContent) => {
      const newShowGeoContent = [...prevShowGeoContent];
      newShowGeoContent[phraseIndex] = !newShowGeoContent[phraseIndex];
      return newShowGeoContent;
    });
  };

  return (
    <DialoguePhraseContainer>
      <h1>DialoguePhrase</h1>
      <div>
        {french.map((frPhrase, index) => (
          <PhraseCard key={index}>
            <FrPhrase>{frPhrase}</FrPhrase>

            {showGeoContent[index] && (
              <SecondLanguageContent>
                {secondLanguage[index]}
              </SecondLanguageContent>
            )}

            <ChevronContainer onClick={() => handlePhraseChevronToggle(index)}>
              <ChevronImage
                src={ChevronDown}
                alt="ChevronDown"
                rotation={phraseChevronRotation[index] || 0}
              />
            </ChevronContainer>
          </PhraseCard>
        ))}
      </div>
    </DialoguePhraseContainer>
  );
};
const DialoguePhraseContainer = styled.div`
  width: 100%;
`;
const PhraseCard = styled.div`
  background: #ffffec;
  padding: 1rem;
  margin: 1rem 0.5rem;
  position: relative;
  min-height: 3.5rem;
  border-radius: 0 0 0 12px;
  max-width: 100%;
  border-bottom: 3px solid orange;
  border-right: 2px solid orange;
`;

const FrPhrase = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;
const ChevronContainer = styled.div`
  margin-left: auto;

  img {
    position: absolute;
    top: 15%;
    right: 3%;
  }
`;

const ChevronImage = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 0.5s ease;
  margin-left: 1rem;
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  cursor: pointer;
`;

const SecondLanguageContent = styled.div`
  color: grey;
  margin-left: 1rem;
  font-size: 1.2rem;
  font-style: italic;
`;

export default DialoguePhrase;

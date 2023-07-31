import React, { useState } from "react";
import styled from "styled-components";
import ChevronDown from "../../../../../public/icons/chevron-down-24.png";

const DialoguePhrase = ({ phrases }) => {
  const { fr, eng, geo } = phrases;
  const [phraseChevronRotation, setPhraseChevronRotation] = useState({});
  const [showGeoContent, setShowGeoContent] = useState(
    Array(geo.length).fill(false)
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
        {fr.map((frPhrase, index) => (
          <PhraseCard key={index}>
            <p>{frPhrase}</p>
            <p>
              {showGeoContent[index] && <GeoContent>{geo[index]}</GeoContent>}
            </p>
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
const DialoguePhraseContainer = styled.div``;
const PhraseCard = styled.div`
  background: #fbfd80;
  padding: 1rem;
  margin: 1rem;
  position: relative;
  min-height: 4.5rem;
  border-radius: 12px;
  border-bottom: 3px solid orange;
  border-right: 2px solid orange;
`;
const ChevronContainer = styled.div`
  margin-left: auto;
  width: 2rem;
`;

const ChevronImage = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 0.5s ease;
  margin-left: 1rem;
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  cursor: pointer;
`;

const GeoContent = styled.p`
  color: grey;
  margin-left: 1rem;
`;

export default DialoguePhrase;

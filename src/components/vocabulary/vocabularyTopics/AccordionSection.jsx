import React, { useState, useEffect, useRef } from "react";
import ExerciseArticle from "./ExerciseArticle";
import TopicText from "./Text/TopicText";
import VocabularyQuiz from "./vocabularyQuiz/VocabularyQuiz";
import RotatingChevron from "../../Utility/RotatingChevron";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { scrollToContainer } from "../../Utility/scrollToContainer";
import BlurryVocabularyTrainer from "../../flashcard/trainers/BlurryVocabularyTrainer";
const AccordionSection = ({
  type,
  isOpen,
  onToggle,
  french,
  vocabularyData,
  english,
  georgian,
  identifier,
  selectedFlashcards,
}) => {
  const [rotation, setRotation] = useState(0);
  const sectionRef = useRef(null);
  const { t, i18n } = useTranslation();
  const SecondLanguage = i18n.language === "ka" ? georgian : english;
  const words = vocabularyData?.words;

  // console.log("selectedFlashcards in AccordionSection", selectedFlashcards);
  useEffect(() => {
    if (isOpen) {
      // Calculate the scroll position to account for the fixed navbar
      const navbarHeight = 12 * 16; // 3rem (adjust as needed)
      const scrollOffset = navbarHeight;
      scrollToContainer(sectionRef, scrollOffset); // Use the helper function
    }
  }, [isOpen]);

  return (
    <AccordionSectionContainer>
      <h2 onClick={onToggle}>
        {type}
        <RotatingChevron onClick={onToggle} isActive={isOpen} />
      </h2>
      {isOpen && (
        <SectionBox ref={sectionRef}>
          {identifier === "Blury Trainer" && (
            <BlurryVocabularyTrainer selectedFlashcards={selectedFlashcards} />
          )}
          {identifier === "Texte" && (
            <TopicText
              text={vocabularyData?.text}
              vocabulary={french}
              verbFormMapping={vocabularyData?.verbFormMapping}
              isTextVerbs={vocabularyData?.textVerbs}
              vocabularyData={vocabularyData}
            />
          )}
          {identifier === "Genre des noms" && (
            <ExerciseArticle frenchWords={french} parentsData={true} />
          )}
          {identifier === "Questionnaire" && (
            <VocabularyQuiz
              french={french}
              english={english}
              georgian={georgian}
            />
          )}
        </SectionBox>
      )}
    </AccordionSectionContainer>
  );
};

export default AccordionSection;
const AccordionSectionContainer = styled.div`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.tertiaryText};
  align-items: left;
  /* margin-bottom: 2rem; */

  width: 99%;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    width: 95%;

    /* border: 2px solid green; */
    /* text-align: left; */
  }
  @media (min-width: 768px) and (max-width: 1220px) {
  }
  @media (min-width: 415px) and (max-width: 767px) {
  }
  @media (min-width: 359px) and (max-width: 415px) {
    /* width: 350px; */
  }
  @media (max-width: 364px) {
  }
  @media (max-width: 321px) {
  }
`;

const SectionBox = styled.div`
  /* border: 2px solid green; */
  width: 97%;
  padding: 1rem;
`;

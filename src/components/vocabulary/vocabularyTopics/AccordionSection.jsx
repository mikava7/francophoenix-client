import React, { useState, useEffect, useRef } from "react";
import ExerciseArticle from "./ExerciseArticle";
import TopicText from "./Text/TopicText";
import VocabularyQuiz from "./VocabularyQuiz";
import RotatingChevron from "../../Utility/RotatingChevron";
import styled from "styled-components";

const AccordionSection = ({
  type,
  isOpen,
  onToggle,
  french,
  vocabularyData,
  english,
  georgian,
}) => {
  const [rotation, setRotation] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Calculate the scroll position to account for the fixed navbar
      const navbarHeight = 10 * 16; // 3rem (adjust as needed)
      const scrollPosition = sectionRef.current.offsetTop - navbarHeight;

      // Scroll to the adjusted position
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [isOpen]);

  return (
    <AccordionSectionContainer>
      <h2 onClick={onToggle}>
        {type}
        <RotatingChevron />
      </h2>
      {isOpen && (
        <SectionBox ref={sectionRef}>
          {type === "Texte" && (
            <TopicText
              text={vocabularyData?.text}
              vocabulary={french}
              verbFormMapping={vocabularyData?.verbFormMapping}
              isTextVerbs={vocabularyData?.textVerbs}
              vocabularyData={vocabularyData}
            />
          )}
          {type === "Genre des noms" && (
            <ExerciseArticle frenchWords={french} parentsData={true} />
          )}
          {type === "Questionnaire" && (
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
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.tertiaryText};
  align-items: left;

  h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;

    text-align: left;
  }
`;

const SectionBox = styled.div``;

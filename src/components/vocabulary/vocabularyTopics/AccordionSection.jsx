import React, { useState } from "react";
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

  const handleToggle = () => {
    setRotation(rotation === 0 ? 180 : 0); // Toggle the rotation angle
    onToggle(); // Call the provided onToggle function to handle opening/closing the section
  };

  return (
    <AccordionSectionContainer>
      <h2 onClick={handleToggle}>
        Topic {type}
        <RotatingChevron
          rotation={rotation}
          style={{ marginRight: "auto", margin: 0, border: "2px solid red" }}
        />
      </h2>
      {isOpen && (
        <div>
          {/* Render the content of the section based on 'type' */}
          {type === "text" && (
            <TopicText
              text={vocabularyData?.text}
              vocabulary={french}
              verbFormMapping={vocabularyData?.verbFormMapping}
              isTextVerbs={vocabularyData?.textVerbs}
              vocabularyData={vocabularyData}
            />
          )}
          {type === "article" && (
            <ExerciseArticle frenchWords={french} parentsData={true} />
          )}
          {type === "quiz" && (
            <VocabularyQuiz
              french={french}
              english={english}
              georgian={georgian}
            />
          )}
        </div>
      )}
    </AccordionSectionContainer>
  );
};

export default AccordionSection;
const AccordionSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;

    text-align: left;
  }
`;

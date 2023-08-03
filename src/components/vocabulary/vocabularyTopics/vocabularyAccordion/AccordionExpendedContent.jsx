import React from "react";
import styled from "styled-components";
const AccordionExpendedContent = ({
  frenchExamples,
  index,
  expandedIndex,
  secondLanguageExamples,
}) => {
  return (
    <AccordionContent isExpanded={index === expandedIndex}>
      <FrenchExamples>{frenchExamples[index]}</FrenchExamples>
      <SecondLanguageExamples>
        {secondLanguageExamples[index]}
      </SecondLanguageExamples>
    </AccordionContent>
  );
};

export default AccordionExpendedContent;
const AccordionContent = styled.div`
  width: 100%;
  margin: 0 auto;
  max-height: ${(props) => (props.isExpanded ? "1000px" : "0")};
  opacity: ${(props) => (props.isExpanded ? "1" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  background-color: #0055a4;
  color: #ffffff;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 97% 100%, 3% 100%);
`;
const FrenchExamples = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem 2rem;
  margin-top: 0.5rem;
  background-color: #0055a4;
  color: #ffffff;
`;
const SecondLanguageExamples = styled.div`
  text-align: center;
  font-size: 1rem;
  padding: 0.5rem 2rem;
`;

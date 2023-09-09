import React from "react";
import styled from "styled-components";
const AccordionExpendedContent = ({ index, expandedIndex, definition }) => {
  // console.log("definition in AccordionExpendedContent", definition);
  return (
    <AccordionContent isExpanded={index === expandedIndex}>
      <FrenchExamples>{definition[index]}</FrenchExamples>
    </AccordionContent>
  );
};

export default AccordionExpendedContent;
const AccordionContent = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-left: -0.1rem;

  /* outline: 4px solid red; */
  max-height: ${(props) => (props.isExpanded ? "1000px" : "0")};
  opacity: ${(props) => (props.isExpanded ? "1" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  background-color: ${(props) => props.theme.tertiaryBackground};
  color: ${(props) => props.theme.primaryText};
  position: relative;
  clip-path: polygon(0 0, 100% 0, 97% 100%, 3% 100%);
  @media (min-width: 303px) and (max-width: 576px) {
    margin-left: -0.1rem;
  }
  @media (max-width: 302px) {
    width: 91%;

    margin-left: -0.4rem;
  }
`;
const FrenchExamples = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem 2rem;
  margin-top: 0.5rem;
  font-size: ${(props) => props.theme.small};
`;
// const SecondLanguageExamples = styled.div`
//   text-align: center;
//   font-size: 1rem;
//   padding: 0.5rem 2rem;
// `;

import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const GrammerTopic = ({ topics }) => {
  const { i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  // console.log("topics in BasicGrammerTopic", topics);
  if (!topics) {
    return null;
  }

  const {
    title: { titleFr, titleEn, titleGeo },
  } = topics;
  const secondLanguage = isGeorgian ? titleGeo : titleEn;

  // Render the content using the extracted data
  return (
    <BasicGrammerContainer>
      <h2>{titleFr}</h2>
      <h3>{secondLanguage}</h3>
    </BasicGrammerContainer>
  );
};

export default GrammerTopic;

const BasicGrammerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 2px solid grey;
  width: 370px;
  border-radius: 12px;
  outline: 1px solid grey;
  border-bottom: 3px solid black;
  border-right: 3px solid black;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.background};
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  }
`;

import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const BasicGrammerTopic = ({ topics }) => {
  const { i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  console.log("topics in BasicGrammerTopic", topics);
  if (!topics) {
    return null;
  }

  const {
    title: { titleFr, titleEng, titleGeo },
  } = topics;
  const secondLanguage = isGeorgian ? titleGeo : titleEng;

  // Render the content using the extracted data
  return (
    <BasicGrammerContainer>
      <h2>{titleFr}</h2>
      <h3>{secondLanguage}</h3>
    </BasicGrammerContainer>
  );
};

export default BasicGrammerTopic;

const BasicGrammerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;

  width: 350px;
  height: 220px;
  border-radius: 12px;
  outline: 1px solid ${(props) => props.theme.primaryText};

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.pr};
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  }
`;

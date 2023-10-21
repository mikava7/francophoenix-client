import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import useScrollToTopOnRouteChange from "../../../hooks/useScrollToTopOnRouteChange";
const GrammerTopic = ({ topics }) => {
  const { i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";
  useScrollToTopOnRouteChange();
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

export const BasicGrammerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 350px;
  height: 250px;
  border-radius: 12px;
  outline: 1px solid ${(props) => props.theme.secondaryText};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.pimaryText};
  &:hover {
    transform: scale(1.02);
    box-shadow: 4px 8px 10px rgba(32, 31, 31, 0.5);
    outline: none;
    border-bottom: 3px solid black;
    border-right: 3px solid black;
  }
`;

import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const BasicGrammerTopic = ({ topics }) => {
  const { i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";

  if (!topics || !topics.title) {
    return null;
  }

  const secondLanguage = isGeorgian
    ? topics.title.titleGeo
    : topics.title.titleEng;

  return (
    <BasicGrammerContainer>
      <h3>{topics.title.titleFr}</h3>
      <h5>{secondLanguage}</h5>
    </BasicGrammerContainer>
  );
};

export default BasicGrammerTopic;

const BasicGrammerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.15rem;
  padding: 0.2rem;
  width: 300px;
  height: 250px;
  border-radius: 12px;
  outline: 1px solid ${(props) => props.theme.primaryText};

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.secondaryText};
  overflow-y: hidden;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    color: ${(props) => props.theme.primaryText};
  }
  h5 {
    text-align: center;
    margin-top: auto;
  }
  @media (max-width: 356px) {
    width: auto;
  }
`;

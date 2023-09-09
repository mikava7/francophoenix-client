import React from "react";
import { StyledLink } from "../../../Styles/globalStyles";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const VerbsInText = ({ uniqueVerbs }) => {
  const { t } = useTranslation();
  return (
    <VerbsInTextBox>
      <h3>{t("Verbes utilisés dans le texte")}</h3>
      {uniqueVerbs.map((verb, index) => (
        <StyledLink to={`/verbs/${verb}`}>
          <li key={index}>
            <button>{verb}</button>
          </li>
        </StyledLink>
      ))}
    </VerbsInTextBox>
  );
};

export default VerbsInText;
const VerbsInTextBox = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  height: 170px;
  overflow-y: scroll;
  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
  border-bottom: 2px solid ${(props) => props.theme.highlight3};
  h3 {
    margin: 0 auto;
    width: 100%;
  }
  li {
    display: flex;
    text-decoration: none;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
    button {
      text-decoration: none;
      padding: 0.2rem;
      margin: 0;
      width: auto;
      background-color: ${(props) => props.theme.secondaryText};
      color: ${(props) => props.theme.secondaryBackground};
      cursor: pointer;
      font-size: ${(props) => props.theme.small};
    }
  }
`;

import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const VerbsInText = ({ uniqueVerbs }) => {
  const { t } = useTranslation();

  const redirectToBescherelle = (verb) => {
    const formattedVerb = verb.replace(/\s+/g, "-");
    const url = `https://conjugaison.bescherelle.com/verbes/${formattedVerb}`;
    window.open(url, "_blank");
  };

  return (
    <VerbsInTextBox>
      <h3>{t("Verbes utilisés dans le texte")}</h3>
      {uniqueVerbs.map((verb, index) => (
        <li key={index}>
          <button onClick={() => redirectToBescherelle(verb)}>{verb}</button>
        </li>
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
    margin: 0.5rem;
    flex-wrap: wrap;

    button {
      text-decoration: none;
      border-radius: 4px;
      padding: 0.2rem;
      margin: 0;
      width: auto;
      background-color: ${(props) => props.theme.primaryText};
      color: ${(props) => props.theme.secondaryBackground};
      cursor: pointer;
      font-size: ${(props) => props.theme.small};
      &:hover {
        background-color: ${(props) => props.theme.secondaryBackground};
        color: ${(props) => props.theme.primaryText};
      }
    }
  }
`;

import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const DefinitionToggle = ({
  definition,
  secondLanguage,
  index,
  secondLangButtonName,
  isMultipleDefinitions,
}) => {
  const [showDefinition, setShowDefinition] = useState(true);
  // console.log("definition in toggle", definition);
  // console.log("secondLanguage in toggle", secondLanguage);

  const toggleDefinition = () => {
    setShowDefinition(!showDefinition);
  };

  return (
    <div>
      <ButtonContainer>
        <button
          style={{ background: showDefinition ? "#FD5602" : "#ffffec" }}
          onClick={toggleDefinition}
        >
          Fr
        </button>
        <button
          style={{ background: showDefinition ? "#ffffec" : "#FD5602" }}
          onClick={toggleDefinition}
        >
          {secondLangButtonName}
        </button>
      </ButtonContainer>
      <SecondLangOrDef>
        {isMultipleDefinitions
          ? showDefinition
            ? definition[index]
            : secondLanguage[index]
          : showDefinition
          ? definition
          : secondLanguage}
      </SecondLangOrDef>
    </div>
  );
};

export default DefinitionToggle;
const ButtonContainer = styled.div`
  position: absolute;
  top: 10%;
  right: 2%;
  font-size: 1.4rem;

  button {
    border: none;
    font-size: 1.2rem;
    width: 3rem;
    height: 2rem;
    transition: background-color 0.5s ease;

    background: ${(props) => props.theme.secondaryBackground};
    color: ${(props) => props.theme.primaryText};
  }
`;
const SecondLangOrDef = styled.div`
  margin-left: 1rem;
  min-height: 3rem;
  padding: 0.5rem;
  font-size: 1.4rem;
  font-style: italic;
`;
